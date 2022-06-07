export interface ISqlObj {
  sql: string;
  params: any[];
}

export type SqlType = string;

export interface IConfig {
  filename: string;
  mode?: number;
  driver: any;
}

export interface IRunResult {
  lastID?: number;
  changes?: number;
}
