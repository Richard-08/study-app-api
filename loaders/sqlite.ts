import { open } from "../components/common/services/sqlite/sqlite.service";
import sqlite3 from "sqlite3";
import path from "path";

export default open({
  filename: path.resolve("tmp/database.db"),
  driver: sqlite3.Database,
});
