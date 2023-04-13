import { Knex } from 'knex';
import { FIELDS, MESSAGES, TABLES } from '../constants';

export const createUsersTableIfNotExists = async (db: Knex, isDry: boolean): Promise<void> => {
  const exists: boolean = await db.schema.hasTable(TABLES.USERS);

  if (!isDry && exists) {
    console.log(`${MESSAGES.FOUND_TABLE} '${TABLES.USERS}'`);
    return;
  }

  console.log(`${MESSAGES.CREATING_TABLE} '${TABLES.USERS}'...`);

  const createTable: Knex.SchemaBuilder = db.schema.createTable(TABLES.USERS, (table) => {
    table.increments(FIELDS.ID);
    table.string(FIELDS.EMAIL).notNullable().unique();
    table.string(FIELDS.FIRST_NAME).notNullable();
    table.string(FIELDS.LAST_NAME).notNullable();
    table.string(FIELDS.USERNAME).notNullable();
    table.string(FIELDS.SLUG).notNullable().unique();
    table.string(FIELDS.PASSWORD).notNullable();
    table.boolean(FIELDS.DELETED).notNullable().defaultTo(false);
    table.timestamp(FIELDS.CREATED_AT).notNullable().defaultTo(db.fn.now());
    table.timestamp(FIELDS.UPDATED_AT).notNullable().defaultTo(db.fn.now());
  });

  if (!isDry) {
    await createTable;
  } else {
    console.log(createTable.toString());
  }

  console.log(`${MESSAGES.CREATED_TABLE} '${TABLES.USERS}'`);
};

export const dropUsersTableIfExists = async (db: Knex): Promise<void> => {
  const exists: boolean = await db.schema.hasTable(TABLES.USERS);

  if (!exists) {
    return;
  }

  await db.schema.dropTable(TABLES.USERS);

  console.log(`${MESSAGES.DROPPED_TABLE} '${TABLES.USERS}'`);
};
