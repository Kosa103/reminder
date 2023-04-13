import { AppState } from '@/common/models';
import { ReducerAction } from '@/storage/models';

const reducer = (
  state: AppState,
  action: ReducerAction,
): AppState => {
  switch (action.type) {
    case 'setIsLoading':
      return ({ ...state, isLoading: action.isLoading });
    case 'setSnackbarData':
      return ({ ...state, snackbarData: action.snackbarData});
    default:
      return state;
  }
};

export default reducer;
