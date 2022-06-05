"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const result = dotenv_1.default.config({ path: path_1.default.resolve(".env") });
if (result.error) {
    throw result.error;
}
const parsed = result.parsed;
exports.default = {
    PORT: (parsed === null || parsed === void 0 ? void 0 : parsed.PORT) || 3000,
    api: {
        prefix: "/api",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29uZmlnL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdEQUF3QjtBQUN4QixvREFBNEI7QUFFNUIsTUFBTSxNQUFNLEdBQUcsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsY0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFN0QsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO0lBQ2hCLE1BQU0sTUFBTSxDQUFDLEtBQUssQ0FBQztDQUNwQjtBQUVELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFFN0Isa0JBQWU7SUFDYixJQUFJLEVBQUUsQ0FBQSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsSUFBSSxLQUFJLElBQUk7SUFDMUIsR0FBRyxFQUFFO1FBQ0gsTUFBTSxFQUFFLE1BQU07S0FDZjtDQUNGLENBQUMifQ==