import { MESSAGES } from '../constants';
import { Knex } from 'knex';
import getDB from '../config';
import { FIELDS, TABLES } from '../constants';

export const createItemsTableIfNotExists = async (isDry: boolean): Promise<void> => {
  const db: Knex = getDB();
  const exists: boolean = await db.schema.hasTable(TABLES.ITEMS);

  if (!isDry && exists) {
    console.log(`${MESSAGES.FOUND_TABLE} '${TABLES.ITEMS}'`);
    return;
  }

  console.log(`${MESSAGES.CREATING_TABLE} '${TABLES.ITEMS}'...`);

  const createTable: Knex.SchemaBuilder = db.schema.createTable(TABLES.ITEMS, (table) => {
    table.increments(FIELDS.ID);
    table.string(FIELDS.NAME).notNullable();
    table.string(FIELDS.SLUG).notNullable().unique();
    table.boolean(FIELDS.CHECKED).notNullable().defaultTo(false);
    table.string(FIELDS.DESCRIPTION);
    table.timestamp(FIELDS.DEADLINE);
    table.boolean(FIELDS.DELETED).notNullable().defaultTo(false);
    table.timestamp(FIELDS.CREATED_AT).notNullable().defaultTo(db.fn.now());
    table.timestamp(FIELDS.UPDATED_AT).notNullable().defaultTo(db.fn.now());
    table.integer(FIELDS.BOARD_ID).unsigned().notNullable();
    table.foreign(FIELDS.BOARD_ID).references(`${TABLES.BOARDS}.${FIELDS.ID}`);
  });

  if (!isDry) {
    await createTable;
  } else {
    console.log(createTable.toString());
  }

  console.log(`${MESSAGES.CREATED_TABLE} '${TABLES.ITEMS}'`);
};

export const dropItemsTableIfExists = async (): Promise<void> => {
  const db: Knex = getDB();
  const exists: boolean = await db.schema.hasTable(TABLES.ITEMS);

  if (!exists) {
    return;
  }

  await db.schema.dropTable(TABLES.ITEMS);

  console.log(`${MESSAGES.DROPPED_TABLE} '${TABLES.ITEMS}'`);
};
