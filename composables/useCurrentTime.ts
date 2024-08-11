import { useIntervalFn } from '@vueuse/core';

export const useCurrentTime = () => {
  const currentTime = useState(() => new Date());

  const updateCurrentTime = () => {
    currentTime.value = new Date();
  };

  useIntervalFn(() => {
    updateCurrentTime();
  }, 500);

  return currentTime;
};
