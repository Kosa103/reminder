export const VALIDATION_ERRORS = {
  EMAIL_EMPTY: 'Email must not be empty',
  EMAIL_INVALID: 'Invalid email',
  FIELD_REQUIRED: 'This field is required',
  PASSWORD_EMPTY: 'Password must not be empty',
  PASSWORD_TOO_LONG: (characters: number) => `Password must be maximum ${characters} characters long`,
  PASSWORD_TOO_SHORT: (characters: number) => `Password must be at least ${characters} characters long`,
  TEXT_TOO_LONG: (characters: number) => `Text must be maximum ${characters} characters long`,
  TEXT_TOO_SHORT: (characters: number) => `Text must be at least ${characters} characters long`,
};
