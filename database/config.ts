import knex, { Knex } from 'knex';
import { MESSAGES, SQLITE_3 } from './constants';

const connectDB = (): Knex => {
  const DATABASE_PATH: string = process.env.DATABASE_PATH || '';

  const db: Knex = knex({
    client: SQLITE_3,
    connection: {
      filename: DATABASE_PATH,
    },
    useNullAsDefault: true,
  });

  console.log(MESSAGES.CONNECTED);

  return db;
};

export default connectDB;
