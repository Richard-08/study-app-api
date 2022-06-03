import { CommonRoutes } from "../common/common.routes";
import express from "express";

export class AuthRoutes extends CommonRoutes {
  constructor(app: express.Application) {
    super(app, "AuthRoutes");
  }

  configureRoutes(): express.Application {
    return this.app;
  }
}
