import { onUnmounted, ref } from 'vue';

type TimerOptions = {
  onFinish?: () => void;
  onStart?: () => void;
};

export const useSetTimer = (time: number, options?: TimerOptions) => {
  const seconds = ref<number>(time);
  const timerId = ref<number>();
  const isRunning = ref<boolean>(false);

  const startTimer = () => {
    isRunning.value = true;

    timerId.value = setInterval(() => {
      if (seconds.value > 0) {
        seconds.value--;
      } else {
        stopTimer();
        options?.onFinish?.();
      }
    }, 1000);

    options?.onStart?.();
  };

  const stopTimer = () => {
    clearInterval(timerId.value);
    isRunning.value = false;
    seconds.value = time;
  };

  onUnmounted(stopTimer);

  return { seconds, isRunning, startTimer, stopTimer };
};
