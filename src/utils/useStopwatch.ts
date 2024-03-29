import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';

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
    let interval: ReturnType<typeof setInterval> | undefined;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      interval && clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return [time, () => setTime(0), setRunning];
};

export default useStopwatch;
