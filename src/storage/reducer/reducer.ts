import React from 'react';
import { AppState, SnackbarData } from '@/common/models';
import { ReducerAction } from '@/storage/utils/models';
import { INITIAL_STATE } from '../utils/constants';

const actions = {
  setSnackbarData: (
    state: AppState,
    { snackbarData }: { snackbarData: SnackbarData },
  ): AppState => ({ ...state, snackbarData }),
};

const reducer = (
  state: AppState,
  action: ReducerAction,
): AppState => actions[action.type](state, action);

export default reducer;
