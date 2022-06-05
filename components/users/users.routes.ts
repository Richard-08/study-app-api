import { CommonRoutes } from "../common/common.routes";
import { Router } from "express";

export class UserRoutes extends CommonRoutes {
  constructor(app: Router) {
    super(app, "UserRoutes");
  }

  configureRoutes(): Router {
    this.app.use("users", this.router);

    return this.app;
  }
}
