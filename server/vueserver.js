import {
  Vue,
  VueServerRenderer,
  Application,
  join,
  log,
  send,
} from '../deps.ts';

const port = 3333;
const app = new Application();

const renderer = VueServerRenderer.createRenderer();

app.use(async (ctx, next) => {
  const vueApp = new Vue({
    data: {
      url: ctx.request.url.pathname,
    },
    template: `<div> The Visited URL is: {{ url }}</div>`
  })

  renderer.renderToString(vueApp, (err, html) => {
    if (err) {
      res.status(500).end('internal server error')
      return
    }
  })
});

/**
 *   const filePath = ctx.request.url.pathname;
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
 */