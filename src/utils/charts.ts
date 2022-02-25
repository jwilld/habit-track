import { LogObject, LogTimestamp } from '../interfaces/interfaces';
import { getMonthDayYear } from './dates';

export interface DataObject {
  label: string;
  data: (number | undefined)[];
  backgroundColor: string | undefined;
}

const removeArrayDuplicates = (array: string[]) => {
  return Array.from(new Set(array));
};

// map over the selector and remove array
export const mapTime = (logObjects: LogObject[], selector: string): string[] => {
  return removeArrayDuplicates(
    logObjects
      .map((lo: LogObject) => {
        return lo.logTimestamps.map((timestamp) => getMonthDayYear(timestamp));
      })
      .flat()
  );
};

export const createLabelArr = (logObject: LogObject): string[] => {
  const labels = removeArrayDuplicates(
    logObject.logTimestamps.map((timestamp: LogTimestamp) => getMonthDayYear(timestamp))
  );
  return labels;
};
export const createLabelString = (logObject: LogObject): string => {
  let [label] = removeArrayDuplicates(
    logObject.logTimestamps.map((timestamp: LogTimestamp) => getMonthDayYear(timestamp))
  );

  return label;
};
export const createLabelStrings = (loggers: LogObject[]) => {
  return removeArrayDuplicates(loggers.map((logger: LogObject) => createLabelString(logger)));
};

export const createBarLabel = (logObject: LogObject): string => {
  return logObject.title;
};

export const createDataObject = (logObject: LogObject, labels: string[]): DataObject => {
  // export  labels = createLabelArr(logObject);
  const barLabel = createBarLabel(logObject);
  const dateArr = logObject.logTimestamps.map((timestamp) => getMonthDayYear(timestamp));

  const dataObject: DataObject = {
    label: barLabel,
    data: labels.map((label) => {
      let count = undefined;
      if (dateArr.includes(label)) {
        count = dateArr.filter((date) => date === label).length;
      }
      return count;
    }),

    backgroundColor: logObject.color,
  };
  return dataObject;
};

export const createDataObjects = (logObject: LogObject[]): DataObject[] => {
  const labels = mapTime(logObject, 'date');
  const dataObjects = logObject.map((obj) => createDataObject(obj, labels));
  return dataObjects;
};
