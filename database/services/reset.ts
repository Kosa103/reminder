import { Knex } from 'knex';
import connectDB from '../config';
import { MESSAGES } from '../constants';
import { dropUsersTableIfExists } from '../schemas/users';
import { dropBoardsTableIfExists } from '../schemas/boards';
import { dropUserBoardsTableIfExists } from '../schemas/userBoards';
import { dropItemsTableIfExists } from '../schemas/items';

const resetDatabase = async (dry: boolean = false) => {
  const db: Knex = connectDB();

  try {
    console.log(`${MESSAGES.RESET_STARTED} ${dry}`);

    await dropUsersTableIfExists(db);
    await dropBoardsTableIfExists(db);
    await dropUserBoardsTableIfExists(db);
    await dropItemsTableIfExists(db);

    console.log(MESSAGES.RESET_FINISHED);
  } catch (err) {
    console.log(MESSAGES.RESET_ERROR);
    console.log(err);
  } finally {
    db.destroy();
  }
};

export default resetDatabase;
