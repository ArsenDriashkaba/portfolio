const SECONDS_IN_AN_HOUR = 3600;
const SECONDS_IN_A_DAY = 24 * SECONDS_IN_AN_HOUR;

export const getTimerTimeString = (seconds: number): string => {
  let remainingSeconds = seconds;

  if (seconds > SECONDS_IN_A_DAY) {
    remainingSeconds = SECONDS_IN_A_DAY;
    console.error('Maximum timer interval is 1 day');
  }

  const timeStamp = new Date(remainingSeconds * 1000)
    .toISOString()
    .slice(11, 19);

  return seconds >= SECONDS_IN_AN_HOUR ? timeStamp : timeStamp.slice(3);
};
