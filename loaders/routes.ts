import { Router } from "express";
import { AuthRoutes } from "../components/auth/auth.routes";
import { UserRoutes } from "../components/users/users.routes";

export default (): Router => {
  const app: Router = Router();

  new AuthRoutes(app);
  new UserRoutes(app);

  return app;
};
