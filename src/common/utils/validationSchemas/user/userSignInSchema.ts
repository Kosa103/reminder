import * as Yup from 'yup';
import { LIMITS } from '@/common/utils/constants';
import { VALIDATION_ERRORS } from '../../../../storage/utils/messages';

export const userSignInSchema = Yup.object().shape({
  email: Yup.string()
    .required(VALIDATION_ERRORS.EMAIL_EMPTY)
    .email(VALIDATION_ERRORS.EMAIL_INVALID)
    .max(LIMITS.CHAR, VALIDATION_ERRORS.TEXT_TOO_LONG(LIMITS.CHAR)),
  password: Yup.string()
    .required(VALIDATION_ERRORS.PASSWORD_EMPTY)
    .min(LIMITS.PASSWORD_MIN, VALIDATION_ERRORS.PASSWORD_TOO_SHORT(LIMITS.PASSWORD_MIN))
    .max(LIMITS.CHAR, VALIDATION_ERRORS.PASSWORD_TOO_LONG(LIMITS.CHAR)),
});
