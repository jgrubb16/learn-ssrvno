import { React, ReactDOMServer } from "../deps.ts";
import App from "../views/App.tsx";
import Main from "../views/components/Main.tsx";
import Hide from "../views/components/Hide.tsx";

const browserBundlePath: string = "/browser.js";

const html: string =
  `<html><head><script type="module" src="${browserBundlePath}"></script><link rel="stylesheet" href="style.css" type="text/css"><style>* { font-family: Helvetica; }</style><link rel='icon' type='image/png' href='https://i.imgur.com/ALQnrfR.png'></head><body><div id="root">${
    (ReactDOMServer as any).renderToString(<App />)
  }</div></body></html>`;

const js: string = `import React from "https://dev.jspm.io/react@16.14.0";
  \nimport ReactDOM from "https://dev.jspm.io/react-dom@16.14.0";
  \nconst Main = ${Main};
  \nconst Hide = ${Hide};
  \nReactDOM.hydrate(React.createElement(${App}), document.getElementById("root"));`;

export { browserBundlePath, html, js };

/**
 * 
 */