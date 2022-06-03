"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const result = dotenv_1.default.config({ path: path_1.default.resolve("/.env") });
if (result.error) {
    throw result.error;
}
console.log(result.parsed);
exports.default = Object.assign(Object.assign({}, result.parsed), { api: {
        prefix: "/api",
    } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29uZmlnL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdEQUF3QjtBQUN4QixvREFBNEI7QUFFNUIsTUFBTSxNQUFNLEdBQUcsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsY0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFOUQsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO0lBQ2hCLE1BQU0sTUFBTSxDQUFDLEtBQUssQ0FBQztDQUNwQjtBQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRzNCLGtEQUNLLE1BQU0sQ0FBQyxNQUFNLEtBQ2hCLEdBQUcsRUFBRTtRQUNILE1BQU0sRUFBRSxNQUFNO0tBQ2YsSUFDRCJ9