"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = exports.open = void 0;
const Database_1 = require("./Database");
Object.defineProperty(exports, "Database", { enumerable: true, get: function () { return Database_1.Database; } });
function open(config) {
    const db = new Database_1.Database(config);
    db.open();
    return db;
}
exports.open = open;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9kYi9zcWxpdGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQXNDO0FBU3ZCLHlGQVROLG1CQUFRLE9BU007QUFOdkIsU0FBUyxJQUFJLENBQUMsTUFBYztJQUMxQixNQUFNLEVBQUUsR0FBRyxJQUFJLG1CQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ1YsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDO0FBRVEsb0JBQUkifQ==