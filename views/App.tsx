import { React } from "../deps.ts";
import Main from "./components/Main.tsx";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      button: any;
      img: any;
      input: any;
      div: any;
      h1: any;
      h3: any;
      p: any;
    }
  }
}

const App = () => {
  return (
    <div className="app">
      <h1>Deno and React and SSR</h1>
      <Main />
    </div>
  );
};

export default App;
