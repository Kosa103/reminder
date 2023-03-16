import getDB from "../config";
import { Knex } from "knex";
import { createUsersTableIfNotExists } from "../schemas/users";
import { createBoardsTableIfNotExists } from "../schemas/boards";
import { createUserBoardsTableIfNotExists } from "../schemas/userBoards";
import { createItemsTableIfNotExists } from "../schemas/items";
import { MESSAGES } from "../constants";

const initializeDatabase = async (dry: boolean = false): Promise<void> => {
  try {
    console.log(`${MESSAGES.INITIALIZE_STARTED} ${dry}`);

    await createUsersTableIfNotExists(dry);
    await createBoardsTableIfNotExists(dry);
    await createUserBoardsTableIfNotExists(dry);
    await createItemsTableIfNotExists(dry);

    console.log(MESSAGES.INITIALIZE_FINISHED);
  } catch (err) {
    console.log(MESSAGES.INITIALIZE_ERROR);
    console.log(err);
  } finally {
    const db: Knex = getDB();
    db.destroy()
  }
};

export default initializeDatabase;
