import { Database } from "./Database";
import { Config } from "./interfaces";

function open(config: Config): Database {
  const db = new Database(config);
  db.open();
  return db;
}

export { open, Database };
