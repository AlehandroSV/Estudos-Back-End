import express from "express";

import routes from "./routes";
import "./database";
// import auth from "./app/middlewares/auth";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    // Privatização global
    // this.server.use(auth);
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
