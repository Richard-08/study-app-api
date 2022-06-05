"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_dao_1 = __importDefault(require("../dao/users.dao"));
class UserService {
    create(payload) {
        return users_dao_1.default.create(payload);
    }
    getUserById(id) {
        return users_dao_1.default.findById(id);
    }
    getUserByEmail(email) {
        return users_dao_1.default.findByEmail(email);
    }
}
exports.default = new UserService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY29tcG9uZW50cy91c2Vycy9zZXJ2aWNlcy91c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxpRUFBdUM7QUFFdkMsTUFBTSxXQUFXO0lBQ2YsTUFBTSxDQUFDLE9BQW1CO1FBQ3hCLE9BQU8sbUJBQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELFdBQVcsQ0FBQyxFQUFVO1FBQ3BCLE9BQU8sbUJBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFhO1FBQzFCLE9BQU8sbUJBQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUNGO0FBRUQsa0JBQWUsSUFBSSxXQUFXLEVBQUUsQ0FBQyJ9