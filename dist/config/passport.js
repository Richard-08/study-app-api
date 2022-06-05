"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_service_1 = __importDefault(require("../components/users/services/user.service"));
const LocalStrategy = passport_local_1.default.Strategy;
passport_1.default.serializeUser((req, user, done) => {
    done(undefined, user);
});
passport_1.default.deserializeUser((id, done) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_service_1.default.getUserById(id);
    done(user);
}));
passport_1.default.use(new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    user_service_1.default.getUserByEmail(email).then((user) => {
        if (!user) {
            return done(undefined, false, {
                message: `Email ${email} not found`,
            });
        }
        bcrypt_1.default.compare(password, user.password, (err, isMatch) => {
            if (err) {
                throw err;
            }
            if (isMatch) {
                return done(null, user);
            }
            else {
                done(null, false, { message: "Invalid email or password." });
            }
        });
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3BvcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb25maWcvcGFzc3BvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBZ0M7QUFDaEMsb0VBQTJDO0FBQzNDLG9EQUE0QjtBQUM1Qiw2RkFBb0U7QUFHcEUsTUFBTSxhQUFhLEdBQUcsd0JBQWEsQ0FBQyxRQUFRLENBQUM7QUFFN0Msa0JBQVEsQ0FBQyxhQUFhLENBQVcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO0lBQ25ELElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDeEIsQ0FBQyxDQUFDLENBQUM7QUFFSCxrQkFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFPLEVBQVUsRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUNsRCxNQUFNLElBQUksR0FBZSxNQUFNLHNCQUFXLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNiLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxrQkFBUSxDQUFDLEdBQUcsQ0FDVixJQUFJLGFBQWEsQ0FDZixFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsRUFDMUIsQ0FBQyxLQUFhLEVBQUUsUUFBZ0IsRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUN4QyxzQkFBVyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFnQixFQUFFLEVBQUU7UUFDMUQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUU7Z0JBQzVCLE9BQU8sRUFBRSxTQUFTLEtBQUssWUFBWTthQUNwQyxDQUFDLENBQUM7U0FDSjtRQUVELGdCQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBQ3ZELElBQUksR0FBRyxFQUFFO2dCQUNQLE1BQU0sR0FBRyxDQUFDO2FBQ1g7WUFFRCxJQUFJLE9BQU8sRUFBRTtnQkFDWCxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDekI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsQ0FBQyxDQUFDO2FBQzlEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FDRixDQUNGLENBQUMifQ==