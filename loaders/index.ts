import express from "express";
import logger from "./logger";
import expressLoader from "./express";

export default async (app: express.Application) => {
  await expressLoader(app);
  logger.info("Express loaded");
};
