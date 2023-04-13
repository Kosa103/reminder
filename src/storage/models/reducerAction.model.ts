import { IsLoadingAction } from './isLoadingAction.model';
import { SnackbarDataAction } from './snackbarDataAction.model';

export type ReducerAction = SnackbarDataAction | IsLoadingAction;
