import { SnackbarData } from '@/common/models';

export interface SnackbarDataAction {
  type: 'setSnackbarData';
  snackbarData: SnackbarData;
}
