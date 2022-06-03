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
const config_1 = __importDefault(require("./config/config"));
const express_1 = __importDefault(require("express"));
const loaders_1 = __importDefault(require("./loaders"));
const logger_1 = __importDefault(require("./loaders/logger"));
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        yield (0, loaders_1.default)(app);
        app
            .listen(config_1.default.PORT, () => {
            logger_1.default.info(`
        ****************************************
        🚀 Server listening on port: ${config_1.default.PORT}
        ****************************************
      `);
        })
            .on("error", (err) => {
            logger_1.default.error(err);
            process.exit(1);
        });
    });
}
const app = startServer();
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQXFDO0FBQ3JDLHNEQUE4QjtBQUM5Qix3REFBZ0M7QUFDaEMsOERBQXNDO0FBRXRDLFNBQWUsV0FBVzs7UUFDeEIsTUFBTSxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUM7UUFFdEIsTUFBTSxJQUFBLGlCQUFPLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFFbkIsR0FBRzthQUNBLE1BQU0sQ0FBQyxnQkFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDeEIsZ0JBQU0sQ0FBQyxJQUFJLENBQUM7O3VDQUVxQixnQkFBTSxDQUFDLElBQUk7O09BRTNDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQzthQUNELEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNuQixnQkFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUFBO0FBRUQsTUFBTSxHQUFHLEdBQUcsV0FBVyxFQUFFLENBQUM7QUFFMUIsa0JBQWUsR0FBRyxDQUFDIn0=