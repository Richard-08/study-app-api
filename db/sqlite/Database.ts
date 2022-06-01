import path from "path";
import { SqlObj, SqlType, Config } from "./interfaces";
import sqlite3 from "sqlite3";

export class Database {
  config: Config;
  db: sqlite3.Database;

  constructor(config: Config) {
    this.config = config;
    this.db = null;
  }

  open(): Promise<void> {
    return new Promise((resolve, reject) => {
      let { filename, mode, driver } = this.config;

      if (filename === null || filename === undefined) {
        throw new Error("Sqlite file not found");
      }

      if (!driver) {
        throw Error("Sqlite driver not found");
      }

      if (mode) {
        this.db = new driver(filename, mode, (err) => {
          if (err) {
            console.log("Sqlite connect error");
            return reject(err);
          }

          resolve();
        });
      } else {
        this.db = new driver(filename, (err) => {
          if (err) {
            console.log("Sqlite connect error");
            return reject(err);
          }

          resolve();
        });
      }
    });
  }

  close(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.close((err) => {
        if (err) {
          return reject(err);
        }

        resolve();
      });
    });
  }
}
