import config from "../../../config/config";
import { Request, Response, NextFunction } from "express";
import passport from "passport";
import { IVerifyOptions } from "passport-local";
import { IUser } from "../../users/interfaces/user.interface";
import jwt from "jsonwebtoken";
import { body, check, validationResult } from "express-validator";

class AuthController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      await check("email", "Email is not valid").isEmail().run(req);
      await check("password", "Password cannot be blank")
        .isLength({ min: 1 })
        .run(req);

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const message = errors
          .array()
          .map((err) => `Param ${err.param} - ${err.msg}; `)
          .join("");
        throw new Error(message);
      }

      passport.authenticate(
        "local",
        { session: false },
        (err: Error, user: IUser, info: IVerifyOptions) => {
          if (err || !user) {
            return res
              .status(400)
              .json({ message: info ? info.message : "Login failed" });
          }

          req.logIn(user, (err) => {
            if (err) {
              res.status(400).json({ message: err.message || "Login failed" });
            }

            const token = this.#generateToken(user);

            return res.json({ user, token });
          });
        }
      );
    } catch (error) {
      res.status(400).json(error);
    }
  }
  async register(req: Request, res: Response) {
    try {
    } catch (error) {}
  }
  async logout(req: Request, res: Response) {
    try {
    } catch (error) {}
  }

  #generateToken(user: IUser) {
    return jwt.sign(user, config.JWT_SECRET);
  }
}

export default new AuthController();
