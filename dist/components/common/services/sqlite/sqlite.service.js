"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = exports.open = void 0;
const Database_1 = require("./Database");
Object.defineProperty(exports, "Database", { enumerable: true, get: function () { return Database_1.Database; } });
function open(config) {
    return new Database_1.Database(config);
}
exports.open = open;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3FsaXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2NvbW1vbi9zZXJ2aWNlcy9zcWxpdGUvc3FsaXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQXNDO0FBT3ZCLHlGQVBOLG1CQUFRLE9BT007QUFKdkIsU0FBUyxJQUFJLENBQUMsTUFBYztJQUMxQixPQUFPLElBQUksbUJBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRVEsb0JBQUkifQ==