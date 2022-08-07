import express from "express";
import routes from "./routes.js";

const app = express();
const port = 3000;

// GET routes
routes.forEach(({ route, controller }) => {
  app.get(route, controller);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
