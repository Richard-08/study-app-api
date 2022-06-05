import { CommonRoutes } from "../common/common.routes";
import { Router } from "express";

export class AuthRoutes extends CommonRoutes {
  constructor(app: Router) {
    super(app, "AuthRoutes");
  }

  configureRoutes(): Router {
    this.app.use("users", this.router);

    return this.app;
  }
}
