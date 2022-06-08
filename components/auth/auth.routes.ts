import { CommonRoutes } from "../common/common.routes";
import { Router } from "express";
import authController from "./controllers/auth.controller";

export class AuthRoutes extends CommonRoutes {
  constructor(app: Router) {
    super(app, "AuthRoutes");
  }

  configureRoutes(): Router {
    this.app.use("users", this.router);

    this.router.post("/register", authController.register);
    this.router.post("/login", authController.login);
    this.router.post("/logout", authController.register);
    return this.app;
  }
}
