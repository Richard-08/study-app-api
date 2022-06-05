import { SqlObj, SqlType, Config, RunResult } from "./interfaces";
import sqlite3 from "sqlite3";

export class Database {
  config: Config;
  db: sqlite3.Database;

  constructor(config: Config) {
    this.config = config;
    this.db = new config.driver(config.filename, config.mode);
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

  run(sql: SqlType, params: any[]): Promise<RunResult> {
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
