import config from "./config/config";
import express from "express";
import loaders from "./loaders";
import logger from "./loaders/logger";

async function startServer() {
  const app = express();

  await loaders(app);

  app
    .listen(config.PORT, () => {
      logger.info(`
        ****************************************
        🚀 Server listening on port: ${config.PORT}
        ****************************************
      `);
    })
    .on("error", (err) => {
      logger.error(err);
      process.exit(1);
    });
}

const app = startServer();

export default app;
