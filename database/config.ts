import { existsSync, mkdirSync } from 'fs';
import knex, { Knex } from 'knex';
import { MESSAGES } from './constants';
import { SQLITE_3 } from './constants';

let db: Knex;

const getDB = (): Knex => {
  const DATABASE_PATH = process.env.DATABASE_PATH
    ? `${process.cwd()}/${process.env.DATABASE_PATH}`
    : '';

  if (!existsSync('./db')) {
    mkdirSync('./db');
  }

  if (!db) {
    try {
      db = knex({
        client: SQLITE_3,
        connection: {
          filename: DATABASE_PATH,
        },
        useNullAsDefault: true,
      });

      console.log(MESSAGES.CONNECTED);
    } catch (err) {
      console.error(MESSAGES.FAILED_TO_CONNECT);
      console.error(err);
    }
  }

  return db;
};

export default getDB;
