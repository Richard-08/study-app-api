import { CommonRoutes } from "../common/common.routes";
import express from "express";

export class UserRoutes extends CommonRoutes {
  constructor(app: express.Application) {
    super(app, "UserRoutes");
  }

  configureRoutes(): express.Application {
    return this.app;
  }
}
