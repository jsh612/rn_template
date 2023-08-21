import { useEffect, useState } from 'react';

interface IUseDebounceArgs {
  value: string;
  delay: number;
  delayedEvent?: () => void;
}

const useDebounce = ({ delayedEvent, value, delay }: IUseDebounceArgs) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (delayedEvent) {
        delayedEvent();
      }
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, delayedEvent]);

  return debouncedValue;
};

export default useDebounce;
