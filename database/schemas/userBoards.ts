import { MESSAGES } from '../constants';
import { Knex } from 'knex';
import getDB from '../config';
import { FIELDS, TABLES } from '../constants';

export const createUserBoardsTableIfNotExists = async (isDry: boolean): Promise<void> => {
  const db: Knex = getDB();
  const exists: boolean = await db.schema.hasTable(TABLES.USER_BOARDS);

  if (!isDry && exists) {
    console.log(`${MESSAGES.FOUND_TABLE} '${TABLES.USER_BOARDS}'`);
    return;
  }

  console.log(`${MESSAGES.CREATING_TABLE} '${TABLES.USER_BOARDS}'...`);

  const createTable: Knex.SchemaBuilder = db.schema.createTable(TABLES.USER_BOARDS, (table) => {
    table.increments(FIELDS.ID);
    table.integer(FIELDS.USER_ID).unsigned().notNullable();
    table.foreign(FIELDS.USER_ID).references(`${TABLES.USERS}.${FIELDS.ID}`);
    table.integer(FIELDS.BOARD_ID).unsigned().notNullable();
    table.foreign(FIELDS.BOARD_ID).references(`${TABLES.BOARDS}.${FIELDS.ID}`);
  });

  if (!isDry) {
    await createTable;
  } else {
    console.log(createTable.toString());
  }

  console.log(`${MESSAGES.CREATED_TABLE} '${TABLES.USER_BOARDS}'`);
};

export const dropUserBoardsTableIfExists = async (): Promise<void> => {
  const db: Knex = getDB();
  const exists: boolean = await db.schema.hasTable(TABLES.USER_BOARDS);

  if (!exists) {
    return;
  }

  await db.schema.dropTable(TABLES.USER_BOARDS);

  console.log(`${MESSAGES.DROPPED_TABLE} '${TABLES.USER_BOARDS}'`);
};
