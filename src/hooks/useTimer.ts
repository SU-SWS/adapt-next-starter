import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

export interface UseTimeoutConfig {
  /**
   * Total timer timeout (milliseconds)
   */
  timeout?: number;
  /**
   * How often to update the tick (milliseconds). Set to 0 to prevent tick updating (for perfomance)
   */
  tick?: number;
  /**
   * Whether to automatically start the timer on mount
   */
  autostart?: boolean;
  /**
   * Function to call on timer expiry
   */
  onTimeout?: () => void;
}

/**
 * Basic timer hook with callbacks and ticker
 */
export const useTimer = ({
  timeout = 15000,
  tick: tickDuration = 1000,
  autostart = false,
  onTimeout = () => undefined,
}: UseTimeoutConfig = {}) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const tickTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const [isRunning, setIsRunning] = useState(autostart);
  const [elapsedTime, setElapsedTime] = useState(0);

  const clearTicker = () => clearTimeout(tickTimeoutRef.current);
  const clearTimer = () => clearTimeout(timeoutRef.current);

  /**
   * Start timer if not already started
   */
  const start = useCallback(() => {
    if (!isRunning) {
      setIsRunning(true);

      timeoutRef.current = setTimeout(() => {
        onTimeout();
        clearTicker();
        setElapsedTime(timeout);
      }, timeout);
    }
  }, [
    isRunning,
    setIsRunning,
    setElapsedTime,
    timeout,
    onTimeout,
  ]);
  const stop = useCallback(() => {
    setIsRunning(false);
    clearTicker();
    clearTimer();
  }, [setIsRunning]);
  const reset = useCallback(() => {
    stop();
    setElapsedTime(0);
  }, [stop, setElapsedTime]);

  // elapsedTime/remainingTime
  const getElapsedTime = useCallback(() => elapsedTime, [elapsedTime]);
  const getRemainingTime = useCallback(() => timeout - getElapsedTime(), [timeout, getElapsedTime]);

  // ticker effect
  useEffect(() => {
    if (isRunning && tickDuration) {
      tickTimeoutRef.current = setTimeout(() => {
        setElapsedTime(Math.min(timeout, elapsedTime + tickDuration));
      }, tickDuration);
    }
  }, [
    isRunning,
    tickDuration,
    elapsedTime,
    setElapsedTime,
    timeout,
  ]);

  // mount effect
  useEffect(() => {
    // Start timer as necessary
    if (autostart) {
      start();
    }

    return () => {
      // Clear any timeouts
      clearTimer();
      clearTicker();
    };
  // NOTE: We only want this check fired on initial mount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Hook payload
  return {
    start,
    stop,
    reset,

    getElapsedTime,
    getRemainingTime,

    isRunning,
    elapsedTime,
    remainingTime: timeout - elapsedTime,
  };
};
