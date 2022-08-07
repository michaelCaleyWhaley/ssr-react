import renderAppToString from "./controllers/renderAppToString.js";

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
