// standard library dependencies
export { dirname, join } from "https://deno.land/std@0.74.0/path/mod.ts";
export * as log from "https://deno.land/std@0.74.0/log/mod.ts";

// oak
export {
  Application,
  Router,
  send,
} from "https://deno.land/x/oak@v6.3.1/mod.ts";

// dotenv
export { config } from "https://deno.land/x/dotenv/mod.ts";

// vue
// export { default as Vue } from "https://cdn.skypack.dev/vue";
// export { default as VueServerRenderer } from "https://cdn.skypack.dev/vue-server-renderer";
// export { default as VueRouter } from "https://cdn.skypack.dev/vue-router";

// export Vue from "https://cdn.jsdelivr.net/npm/vue@3.0.4/dist/vue.esm.browser.js";
// export { default as VueServerRenderer } from "https://dev.jspm.io/vue-server-renderer@2.6.12";

// react
export { default as React } from "https://dev.jspm.io/react@16.14.0";
export { default as ReactDOMServer } from "https://dev.jspm.io/react-dom@16.14.0/server";

/**
 * 
 * deno run --allow-env --allow-net --allow-read --allow-write --allow-plugin --unstable server/server.ts -c tsconfig.json
 */
