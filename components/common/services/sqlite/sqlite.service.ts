import { Database } from "./Database";
import { Config } from "./interfaces";

function open(config: Config): Database {
  return new Database(config);
}

export { open, Database };
