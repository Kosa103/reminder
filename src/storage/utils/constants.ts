import { AppState } from '@/common/models';

export const API_URL: string | undefined = process.env.NEXT_PUBLIC_API_URL;

export const DATA_TYPES = {
  BOOLEAN: 'boolean',
  STRING: 'string',
  NUMBER: 'number',
  ARRAY: 'array',
  OBJECT: 'object',
};

export const INITIAL_STATE: AppState = {
  isLoading: false,
  snackbarData: {
    active: false,
    message: '',
    duration: 4500,
    color: 'default',
  },
};
