import config from "../../../config/config";
import { Request, Response, NextFunction } from "express";
import passport from "passport";
import { IVerifyOptions } from "passport-local";
import { IUser } from "../../users/interfaces/user.interface";
import UserService from "../../users/services/user.service";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { body, check, validationResult } from "express-validator";

class AuthController {
  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
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
      res.status(400).json({ message: error });
    }
  }
  async register(req: Request, res: Response): Promise<void> {
    try {
      await check("email", "Email is not valid").isEmail().run(req);
      await check("password", "Password must be at least 6 characters long")
        .isLength({ min: 6 })
        .run(req);
      await check("confirmPassword", "Password do not match")
        .equals(req.body.password)
        .run(req);
      await check("username", "Username cannot be blank")
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
      let { email, password, username } = req.body;
      let user = await UserService.getUserByEmail(email);

      if (!user) {
        throw new Error("The user with the given email already exists");
      }

      let salt = await bcrypt.genSalt(10);
      let hashedPassword = await bcrypt.hash(password, salt);
      let newUser = {
        username,
        email,
        password: hashedPassword,
      };

      let userRecord = await UserService.create(newUser);

      if (userRecord) {
        let user = await UserService.getUserByEmail(email);
        let token = this.#generateToken(user);

        res.json({ user, token });
      }
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
  logout(req: Request, res: Response): void {
    req.logout();
    res.json({ message: "You are logged out" });
  }

  #generateToken(user: IUser) {
    return jwt.sign(user, config.JWT_SECRET);
  }
}

export default new AuthController();
