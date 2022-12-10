import { Dispatch, SetStateAction, useEffect, useState } from 'react';

/**
 * Custom stopwatch
 * @returns [time, resetTime(), setRunning(on/off)]
 */
const useStopwatch = (): [
  number,
  () => void,
  Dispatch<SetStateAction<boolean>>,
] => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return [time, () => setTime(0), setRunning];
};

export default useStopwatch;
