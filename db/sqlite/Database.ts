import { SqlObj, SqlType, Config, RusResult } from "./interfaces";
import sqlite3 from "sqlite3";

export class Database {
  config: Config;
  db: sqlite3.Database;

  constructor(config: Config) {
    this.config = config;
    this.db = null;
  }

  open(): void {
    let { filename, mode, driver } = this.config;

    if (filename === null || filename === undefined) {
      throw new Error("Sqlite file not found");
    }

    if (!driver) {
      throw new Error("Sqlite driver not found");
    }

    if (mode) {
      this.db = new driver(filename, mode, (err) => {
        if (err) {
          console.log("Sqlite connect error");
          throw new Error(err.message);
        }
      });
    } else {
      this.db = new driver(filename, (err) => {
        if (err) {
          console.log("Sqlite connect error");
          throw new Error(err.message);
        }
      });
    }
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

  run(sql: SqlType, params: any[]): Promise<RusResult> {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, function (err) {
        if (err) {
          return reject(err);
        }

        resolve({ lastID: this.lastID, changes: this.changes });
      });
    });
  }

  get<T = any>(sql: SqlType, params: any[]): Promise<T | undefined> {
    return new Promise((resolve, reject) => {
      this.db.get(sql, params, (err, row?: T) => {
        if (err) {
          return reject(err);
        }

        resolve(row);
      });
    });
  }

  all<T = any[]>(sql: SqlType, params: any[]): Promise<T | undefined> {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows?: T) => {
        if (err) {
          return reject(err);
        }

        resolve(rows);
      });
    });
  }
}
