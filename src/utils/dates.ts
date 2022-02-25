import { LogTimestamp } from '../interfaces/interfaces';
export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const dateToYearMonthDay = (date: Date) => {
  return date.toISOString().split('T')[0];
};

export const getMonthDayYear = (timestamp: LogTimestamp): string => {
  return `${timestamp.month}/${timestamp.date}/${timestamp.year} `;
};

export const getMinutes = (timestamp: LogTimestamp): string => {
  return `${timestamp.minutes}`;
};

export const getSeconds = (timestamp: LogTimestamp): string => {
  return `${timestamp.seconds}`;
};
export const getHours = (timestamp: LogTimestamp): string => {
  return `${timestamp.hours}`;
};

export const getHourMinuteSecond = (timestamp: LogTimestamp): string => {
  return `${timestamp.hours}:${timestamp.minutes}:${timestamp.seconds}`;
};

export const dateToUSEST = (date: string): string => {
  return new Date(date).toLocaleString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
};
