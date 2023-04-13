import React from 'react';
import { classnames } from '@/common/utils/helpers';
import AppContext from '@/storage/context/AppContext';
import { AppState } from '@/common/models';
import { ReducerAction } from '@/storage/models';
import { INITIAL_STATE } from '@/storage/utils/constants';
import styles from './index.module.scss';

const SnackBar: React.FC<{}> = () => {
  const [{ snackbarData }, dispatch] = React.useContext<[AppState, (action: ReducerAction) => void]>(AppContext);

  const { active, duration, message, color } = snackbarData;

  const closeSnackBar = React.useCallback((): void => {
    dispatch({
      type: 'setSnackbarData',
      snackbarData: INITIAL_STATE.snackbarData,
    });
  }, [dispatch]);

  React.useEffect(() => {
    if (active) {
      setTimeout(closeSnackBar, duration);
    }
  }, [snackbarData, closeSnackBar, duration]);

  return (
    <div
      className={classnames(
        styles['snack-bar'],
        !active && styles['snack-bar-hidden'],
        color && styles[`snack-bar-${color}`],
      )}
    >
      <div className={styles['snack-bar__message-container']}>
        <p className={styles['snack-bar__message']}>
          {message}
        </p>
      </div>
      <div
        className={styles['snack-bar__button-container']}
        onClick={closeSnackBar}
      >
        <div className={styles['snack-bar__button-close']} />
      </div>
    </div>
  );
};

export default SnackBar;
