import passport from "passport";
import passportLocal from "passport-local";
import bcrypt from "bcrypt";

const LocalStrategy = passportLocal.Strategy;

passport.serializeUser<any, any>((req, user, done) => {
  done(undefined, user);
});

passport.deserializeUser(async (id, done) => {
    User.findById(id, function(err, user) => {
        done(err, user);
    });
});

passport.use(new LocalStrategy({usernameField: "email"}, (email, password, done) => {
    User.findOne({email: email.toLowerCase()}, (err, user) => {
        if (err) {
            return done(err);
        }

        if (!user) {
            return done(undefined, false, {message: `Email ${email} not found`});
        }

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                throw err;
            }

            if (isMatch) {
                return done(null, user);
            } else {
                done(null, false, {message: "Invalid email or password."})
            }
        })
    })
}))