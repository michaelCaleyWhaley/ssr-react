import renderAppToString from "./controllers/renderAppToString/index.js";

const routes = [
  {
    route: "/",
    controller: renderAppToString,
  },
  {
    route: "*",
    controller: renderAppToString,
  },
];

export default routes;
