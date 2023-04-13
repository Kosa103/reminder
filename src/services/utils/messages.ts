export const API_MESSAGES = {
  GENERAL: {
    ERROR: (err: any) => `${err}`,
    INVALID_REQUEST_METHOD: 'Invalid request method',
  },
  USER: {
    EMAIL_IN_USE: 'This email address is already in use!',
    INVALID_CREDENTIALS: 'Invalid credentials!',
    USER_NOT_EXISTS: 'This user does not exist!',
  }
};
