"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite_1 = __importDefault(require("../../../loaders/sqlite"));
class UserDao {
    findById(id) {
        return sqlite_1.default.get("SELECT * FROM users WHERE id = ?", [id]);
    }
    findByEmail(email) {
        return sqlite_1.default.get("SELECT * FROM users WHERE email = ?", [email]);
    }
    create(payload) {
        const { username, email, password } = payload;
        return sqlite_1.default.run("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [username, email, password]);
    }
}
exports.default = new UserDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY29tcG9uZW50cy91c2Vycy9kYW8vdXNlcnMuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscUVBQXlDO0FBR3pDLE1BQU0sT0FBTztJQUNYLFFBQVEsQ0FBQyxFQUFVO1FBQ2pCLE9BQU8sZ0JBQUUsQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxXQUFXLENBQUMsS0FBYTtRQUN2QixPQUFPLGdCQUFFLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQW1CO1FBQ3hCLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUM5QyxPQUFPLGdCQUFFLENBQUMsR0FBRyxDQUNYLGdFQUFnRSxFQUNoRSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQzVCLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLE9BQU8sRUFBRSxDQUFDIn0=