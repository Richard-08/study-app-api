import express from "express";
import cors from "cors";

import { AuthRoutes } from "../components/auth/auth.routes";
import { UserRoutes } from "../components/users/users.routes";

export default function (app: express.Application) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());

  new AuthRoutes(app);
  new UserRoutes(app);
}
