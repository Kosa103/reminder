import { AppState } from '@/common/models';

export const INITIAL_STATE: AppState = {
  snackbarData: {
    active: false,
    message: '',
    duration: 4500,
    color: 'default',
  },
};
