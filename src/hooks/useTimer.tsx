import { useCallback, useEffect, useState } from 'react';

import BackgroundTimer from 'react-native-background-timer';

const useTimer = (initSeconds: number) => {
  const [countForSeconds, setCountForSeconds] = useState(initSeconds);

  const stopTimer = useCallback(() => {
    BackgroundTimer.stopBackgroundTimer();
  }, []);

  const startTimer = useCallback(() => {
    BackgroundTimer.runBackgroundTimer(() => {
      if (countForSeconds > 0) {
        setCountForSeconds((pre) => {
          return pre - 1000;
        });
      }
    }, 1000);
  }, [countForSeconds]);

  const resetCountForSeconds = () => {
    setCountForSeconds(initSeconds);
  };

  useEffect(() => {
    if (countForSeconds <= 0) {
      stopTimer();
    }
  }, [countForSeconds, stopTimer]);

  return { countForSeconds, startTimer, stopTimer, resetCountForSeconds };
};

export default useTimer;
