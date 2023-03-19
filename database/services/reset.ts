import getDB from '../config';
import { Knex } from 'knex';
import { dropUsersTableIfExists } from '../schemas/users';
import { dropBoardsTableIfExists } from '../schemas/boards';
import { dropUserBoardsTableIfExists } from '../schemas/userBoards';
import { dropItemsTableIfExists } from '../schemas/items';
import { MESSAGES } from '../constants';

const resetDatabase = async (dry: boolean = false) => {
  try {
    console.log(`${MESSAGES.RESET_STARTED} ${dry}`);

    await dropUsersTableIfExists();
    await dropBoardsTableIfExists();
    await dropUserBoardsTableIfExists();
    await dropItemsTableIfExists();

    console.log(MESSAGES.RESET_FINISHED);
  } catch (err) {
    console.log(MESSAGES.RESET_ERROR);
    console.log(err);
  } finally {
    const db: Knex = getDB();
    db.destroy()
  }
};

export default resetDatabase;
