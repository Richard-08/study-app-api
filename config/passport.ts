import passport from "passport";
import passportLocal from "passport-local";
import bcrypt from "bcrypt";
import UserService from "../components/users/services/user.service";
import { CreateUser } from "../components/users/interfaces/user.interface";

const LocalStrategy = passportLocal.Strategy;

passport.serializeUser<any, any>((req, user, done) => {
  done(undefined, user);
});

passport.deserializeUser(async (id: number, done) => {
  const user: CreateUser = await UserService.getUserById(id);
  done(user);
});

passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    (email: string, password: string, done) => {
      UserService.getUserByEmail(email).then((user: CreateUser) => {
        if (!user) {
          return done(undefined, false, {
            message: `Email ${email} not found`,
          });
        }

        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            throw err;
          }

          if (isMatch) {
            return done(null, user);
          } else {
            done(null, false, { message: "Invalid email or password." });
          }
        });
      });
    }
  )
);
