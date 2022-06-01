export interface SqlObj {
  sql: string;
  params: any[];
}

export type SqlType = string;

export interface Config {
  filename: string;
  mode?: number;
  driver: any;
}