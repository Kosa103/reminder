import { Knex } from 'knex';
import { FIELDS, MESSAGES, TABLES } from '../constants';

export const createBoardsTableIfNotExists = async (db: Knex, isDry: boolean): Promise<void> => {
  const exists: boolean = await db.schema.hasTable(TABLES.BOARDS);

  if (!isDry && exists) {
    console.log(`${MESSAGES.FOUND_TABLE} '${TABLES.BOARDS}'`);
    return;
  }

  console.log(`${MESSAGES.CREATING_TABLE} '${TABLES.BOARDS}'...`);

  const createTable: Knex.SchemaBuilder = db.schema.createTable(TABLES.BOARDS, (table) => {
    table.increments(FIELDS.ID);
    table.string(FIELDS.NAME).notNullable();
    table.string(FIELDS.SLUG).notNullable().unique();
    table.boolean(FIELDS.DELETED).notNullable().defaultTo(false);
    table.timestamp(FIELDS.CREATED_AT).notNullable().defaultTo(db.fn.now());
    table.timestamp(FIELDS.UPDATED_AT).notNullable().defaultTo(db.fn.now());
    table.integer(FIELDS.USER_ID).unsigned().notNullable();
    table.foreign(FIELDS.USER_ID).references(`${TABLES.USERS}.${FIELDS.ID}`);
  });

  if (!isDry) {
    await createTable;
  } else {
    console.log(createTable.toString());
  }

  console.log(`${MESSAGES.CREATED_TABLE} '${TABLES.BOARDS}'`);
};

export const dropBoardsTableIfExists = async (db: Knex): Promise<void> => {
  const exists: boolean = await db.schema.hasTable(TABLES.BOARDS);

  if (!exists) {
    return;
  }

  await db.schema.dropTable(TABLES.BOARDS);

  console.log(`${MESSAGES.DROPPED_TABLE} '${TABLES.BOARDS}'`);
};
