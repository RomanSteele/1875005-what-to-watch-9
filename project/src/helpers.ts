import { AuthorizationStatus } from './const';

const minutesInHour = 60;

export const convertTime = (value: number) => {
  const hours = (value / minutesInHour);
  const roundedHours = Math.floor(hours);
  const minutes = (hours - roundedHours) * minutesInHour;
  const roundedMinutes = Math.round(minutes);
  return `${roundedHours}h ${roundedMinutes}m`;
};

export const isAuthStatusUnknown = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;
