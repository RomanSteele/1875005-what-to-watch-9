const minutesInHour = 60;

export const convertTime = (value: number) => {
  const hours = (value / minutesInHour);
  const roundedhours = Math.floor(hours);
  const minutes = (hours - roundedhours) * minutesInHour;
  const roundedminutes = Math.round(minutes);
  return `${roundedhours}h ${roundedminutes}m`;
};

