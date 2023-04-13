import React from 'react';
import AppContext from '@/storage/context/AppContext';
import { AppState, SnackbarColor } from '@/common/models';
import { ReducerAction } from '@/storage/models';
import { INITIAL_STATE } from '@/storage/utils/constants';

export const useSnackbar = () => {
  const [, dispatch] = React.useContext<[AppState, (action: ReducerAction) => void]>(AppContext);

  const close = React.useCallback((): void => {
    dispatch({ 
      type: 'setSnackbarData',
      snackbarData: INITIAL_STATE.snackbarData,
     });
  }, [dispatch]);

  const open = React.useCallback(
    (
      snackbarData: {
        message: string,
        duration?: number,
        color?: SnackbarColor,
      },
    ): void => {
      dispatch({
        type: 'setSnackbarData',
        snackbarData: {
          ...INITIAL_STATE.snackbarData,
          active: true,
          ...snackbarData,
        },
      });
    },
    [dispatch]
  );

  return React.useMemo(() => (
    { open, close }
  ), [open, close]);
};
