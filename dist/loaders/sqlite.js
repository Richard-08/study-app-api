"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite_1 = require("../db/sqlite");
const sqlite3_1 = __importDefault(require("sqlite3"));
const path_1 = __importDefault(require("path"));
exports.default = (0, sqlite_1.open)({
    filename: path_1.default.resolve("tmp/database.db"),
    driver: sqlite3_1.default.Database,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3FsaXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbG9hZGVycy9zcWxpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx5Q0FBb0M7QUFDcEMsc0RBQThCO0FBQzlCLGdEQUF3QjtBQUV4QixrQkFBZSxJQUFBLGFBQUksRUFBQztJQUNsQixRQUFRLEVBQUUsY0FBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztJQUN6QyxNQUFNLEVBQUUsaUJBQU8sQ0FBQyxRQUFRO0NBQ3pCLENBQUMsQ0FBQyJ9