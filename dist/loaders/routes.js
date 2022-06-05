"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = require("../components/auth/auth.routes");
const users_routes_1 = require("../components/users/users.routes");
exports.default = () => {
    const app = (0, express_1.Router)();
    new auth_routes_1.AuthRoutes(app);
    new users_routes_1.UserRoutes(app);
    return app;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbG9hZGVycy9yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBaUM7QUFDakMsZ0VBQTREO0FBQzVELG1FQUE4RDtBQUU5RCxrQkFBZSxHQUFXLEVBQUU7SUFDMUIsTUFBTSxHQUFHLEdBQVcsSUFBQSxnQkFBTSxHQUFFLENBQUM7SUFFN0IsSUFBSSx3QkFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLElBQUkseUJBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVwQixPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQyJ9