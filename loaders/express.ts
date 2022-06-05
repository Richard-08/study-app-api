import config from "../config/config";
import express from "express";
import cors from "cors";
import routes from "./routes";

export default function (app: express.Application) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());
  app.use(config.api.prefix, routes());
}
