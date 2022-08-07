import ReactDOM from "react-dom";
import HelloWorld from "./App.js";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).hydrate(HelloWorld);
