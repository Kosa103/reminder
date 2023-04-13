import { Knex } from 'knex';
import connectDB from '../config';
import { MESSAGES } from '../constants';
import { createUsersTableIfNotExists } from '../schemas/users';
import { createBoardsTableIfNotExists } from '../schemas/boards';
import { createUserBoardsTableIfNotExists } from '../schemas/userBoards';
import { createItemsTableIfNotExists } from '../schemas/items';

const initializeDatabase = async (dry: boolean = false): Promise<void> => {
  const db: Knex = connectDB();

  try {
    console.log(`${MESSAGES.INITIALIZE_STARTED} ${dry}`);

    await createUsersTableIfNotExists(db, dry);
    await createBoardsTableIfNotExists(db, dry);
    await createUserBoardsTableIfNotExists(db, dry);
    await createItemsTableIfNotExists(db, dry);

    console.log(MESSAGES.INITIALIZE_FINISHED);
  } catch (err) {
    console.log(MESSAGES.INITIALIZE_ERROR);
    console.log(err);
  } finally {
    db.destroy();
  }
};

export default initializeDatabase;
