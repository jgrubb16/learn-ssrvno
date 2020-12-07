import { Application, join, log, send } from "../deps.ts";

// SSR
import { browserBundlePath, html, js } from "./ssrConstants.tsx";

const port: number = Number(Deno.env.get("PORT")) || 8080;
const app: Application = new Application();

// Error Notification
app.addEventListener("error", (event) => {
  log.error(event.error);
});

// Error Handling
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    console.log("in error handling with error", error);
    throw error;
  }
});

// Track response time in headers of responses
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(
    `${ctx.request.method} ${ctx.request.url} - Response Time = ${rt}`,
  );
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

app.use(async (ctx, next) => {
  const filePath = ctx.request.url.pathname;
  if (filePath === "/") {
    ctx.response.type = `text/html`;
    ctx.response.body = html;
  } else if (filePath === browserBundlePath) {
    ctx.response.type = "application/javascript";
    ctx.response.body = js;
  } else if (filePath === "/style.css") {
    ctx.response.type = "text/css";
    await send(ctx, filePath, {
      root: join(Deno.cwd(), "views/assets"),
    });
  } else await next();
});

// Error handler
app.use(async (ctx) => {
  ctx.throw(500);
});

if (import.meta.main) {
  log.info(`Server is up and running on ${port}`);
  await app.listen({ port });
}

export { app };
