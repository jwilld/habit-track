export interface LogTimestamp {
  date: string;
  month: number;
  day: string;
  year: number;
  hours: string;
  minutes: string;
  seconds: string;
}

export interface LogObject {
  title: string;
  description: string;
  logTimestamps: LogTimestamp[];
  color?: string;
}
