import React from 'react';
import AppContext from '@/storage/context/AppContext';
import { AppState } from '@/common/models';
import { classnames } from '@/common/utils/helpers';
import { ReducerAction } from '@/storage/models';
import styles from './index.module.scss';

const LoadingLayer: React.FC<{}> = () => {
  const [{ isLoading }] = React.useContext<[AppState, (action: ReducerAction) => void]>(AppContext);

  return (
    <div className={classnames(
      styles['loading-layer'],
      isLoading && styles['loading-layer-active'],
    )}></div>
  );
};

export default LoadingLayer;
