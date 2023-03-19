import React from 'react';
import AppContext from './AppContext';
import { AppState } from '@/common/models';
import { ReducerAction } from '../utils/models';
import reducer from '../reducer/reducer';
import { INITIAL_STATE } from '../utils/constants';

interface AppContextProviderProps {
  children: React.ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = (props) => {
  const { children } = props;
  
  const contextReducer: [AppState, React.Dispatch<ReducerAction>] = React.useReducer(reducer, INITIAL_STATE);

  // use context with explicit type:
  // const [{ snackbarData }]: [AppState, React.Dispatch<ReducerAction>] = React.useContext(AppContext);
  return (
    <AppContext.Provider value={contextReducer}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

