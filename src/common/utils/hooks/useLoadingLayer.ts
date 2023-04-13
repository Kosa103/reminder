import React from 'react';
import AppContext from '@/storage/context/AppContext';
import { AppState } from '@/common/models';
import { ReducerAction } from '@/storage/models';

export const useLoadingLayer = () => {
  const [, dispatch] = React.useContext<[AppState, (action: ReducerAction) => void]>(AppContext);

  const show = React.useCallback((): void => {
    dispatch({
      type: 'setIsLoading',
      isLoading: true,
    });
  }, [dispatch]);
  
  const hide = React.useCallback((): void => {
    dispatch({
      type: 'setIsLoading',
      isLoading: false,
    });
  }, [dispatch]);

  return React.useMemo(() => (
    { show, hide }
  ), [show, hide]);
};
