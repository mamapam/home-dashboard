import { useIntervalFn } from '@vueuse/core';

export const useCurrentTime = () => {
  const currentTime = ref(new Date());

  const updateCurrentTime = () => {
    currentTime.value = new Date();
  };

  useIntervalFn(() => {
    updateCurrentTime();
  }, 1000);

  return currentTime;
};
