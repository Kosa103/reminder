export const SQLITE_3 = 'sqlite3';

export const TABLES = {
  BOARDS: 'boards',
  ITEMS: 'items',
  USER_BOARDS: 'userBoards',
  USERS: 'users',
};

export const FIELDS = {
  BOARD_ID: 'boardId',
  CHECKED: 'checked',
  CREATED_AT: 'createdAt',
  DEADLINE: 'deadline',
  DELETED: 'deleted',
  DESCRIPTION: 'description',
  EMAIL: 'email',
  FIRST_NAME: 'firstName',
  ID: 'id',
  LAST_NAME: 'lastName',
  NAME: 'name',
  PASSWORD: 'password',
  SLUG: 'slug',
  UPDATED_AT: 'updatedAt',
  USER_ID: 'userId',
  USERNAME: 'username',
};

export const MESSAGES = {
  CONNECTED: 'App has been successfully connected to database.',
  CREATED_TABLE: 'Created table',
  CREATING_TABLE: 'Creating table',
  DROPPED_TABLE: 'Dropped table',
  FAILED_TO_CONNECT: 'App failed to connect to database!',
  FOUND_TABLE: 'Found table',
  INITIALIZE_ERROR: 'Error initializing database',
  INITIALIZE_FINISHED: 'Initialitzing database finished.',
  INITIALIZE_STARTED: 'Initializing database started. Dry:',
  RESET_ERROR: 'Error reseting database',
  RESET_FINISHED: 'Reseting database finished.',
  RESET_STARTED: 'Reseting database started. Dry:',
};
