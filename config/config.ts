import path from "path";
import dotenv from "dotenv";

const result = dotenv.config({ path: path.resolve("/.env") });

if (result.error) {
  throw result.error;
}

console.log(result.parsed);


export default {
  ...result.parsed,
  api: {
    prefix: "/api",
  },
};
