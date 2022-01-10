export interface LogTimestamp {
  date: string;
  month: number;
  day: string;
  year: number;
  hour: string;
  minute: string;
  second: string;
}

export interface LogObject {
  title: string;
  description: string;
  logTimestamps: LogTimestamp[];
  color?: string;
}
