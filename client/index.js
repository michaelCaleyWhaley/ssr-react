import ReactDOM from "react-dom";
import HelloWorld from "./App.js";

// eslint-disable-next-line no-undef
const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).hydrate(HelloWorld);
