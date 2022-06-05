import { Router } from "express";

export abstract class CommonRoutes {
  app: Router;
  router: Router;
  name: string;

  constructor(app: Router, name: string) {
    this.app = app;
    this.name = name;
    this.router = Router();

    this.configureRoutes();
  }

  get getName() {
    return this.name;
  }

  abstract configureRoutes(): Router;
}
