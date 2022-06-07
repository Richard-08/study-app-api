import config from "./config";
import passport from "passport";
import passportLocal from "passport-local";
import passportJWT from "passport-jwt";
import bcrypt from "bcrypt";
import UserService from "../components/users/services/user.service";
import { IUser } from "../components/users/interfaces/user.interface";

const LocalStrategy = passportLocal.Strategy;

const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;

passport.serializeUser<any, any>((req, user, done) => {
  done(undefined, user);
});

passport.deserializeUser(async (id: number, done) => {
  const user: IUser = await UserService.getUserById(id);
  done(user);
});

passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    (email: string, password: string, done) => {
      UserService.getUserByEmail(email).then((user: IUser) => {
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

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.JWT_SECRET,
    },
    function (jwtPayload, cb) {
      return UserService.getUserById(jwtPayload.id)
        .then((user) => {
          return cb(null, user);
        })
        .catch((err) => {
          return cb(err);
        });
    }
  )
);
