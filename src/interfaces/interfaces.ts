export interface LogTimestamp {
  date: string;
  month: number;
  day: string;
  year: number;
  time: string;
}

export interface LogObject {
  title: string;
  description: string;
  logTimestamps: LogTimestamp[];
}
