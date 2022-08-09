import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../../../client/App.js";

function renderAppToString() {
  const appString = ReactDOMServer.renderToString(<App />);
  return appString;
}

const controller = (req, res) => {
  const html = renderAppToString();
  res.send(html);
};

export default controller;
