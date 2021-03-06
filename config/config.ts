import path from "path";
import dotenv from "dotenv";

const result = dotenv.config({ path: path.resolve(".env") });

if (result.error) {
  throw result.error;
}

const parsed = result.parsed;

export default {
  PORT: parsed?.PORT || 3000,
  JWT_SECRET: parsed?.JWT_SECRET || "token_secret",
  api: {
    prefix: "/api",
  },
};
