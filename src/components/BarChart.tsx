import { useLoggers } from '../context/state';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  CoreChartOptions,
  PluginChartOptions,
} from 'chart.js';

import { LogObject, LogTimestamp } from '../interfaces/interfaces';

import { Bar } from 'react-chartjs-2';
import { _DeepPartialObject } from 'chart.js/types/utils';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const dummyLogObj = [
  {
    title: 'chicken',
    description: 'eating chicken',
    logTimestamps: [
      { date: '6', month: 1, year: 2022, hours: '22', minutes: '10', seconds: '5', day: '4' },
      { date: '6', month: 1, year: 2022, hours: '22', minutes: '10', seconds: '5', day: '4' },
      { date: '6', month: 1, year: 2022, hours: '22', minutes: '10', seconds: '5', day: '4' },
      { date: '6', month: 1, year: 2022, hours: '22', minutes: '10', seconds: '5', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '12', minutes: '3', seconds: '2', day: '4' },
      { date: '8', month: 1, year: 2022, hours: '5', minutes: '45', seconds: '12', day: '4' },
      { date: '8', month: 1, year: 2022, hours: '5', minutes: '45', seconds: '12', day: '4' },
      { date: '8', month: 1, year: 2022, hours: '5', minutes: '45', seconds: '12', day: '4' },
      { date: '8', month: 1, year: 2022, hours: '5', minutes: '45', seconds: '12', day: '4' },
      { date: '8', month: 1, year: 2022, hours: '5', minutes: '45', seconds: '12', day: '4' },
      { date: '8', month: 1, year: 2022, hours: '5', minutes: '45', seconds: '12', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '3', minutes: '21', seconds: '6', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '3', minutes: '21', seconds: '6', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '17', minutes: '0', seconds: '3', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '17', minutes: '0', seconds: '3', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '17', minutes: '0', seconds: '3', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '17', minutes: '0', seconds: '3', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '17', minutes: '0', seconds: '3', day: '4' },
    ],
    color: '#F3F0D7',
  },
  {
    title: 'bacon',
    description: 'eating bacon',
    logTimestamps: [
      { date: '6', month: 1, year: 2022, hours: '22', minutes: '10', seconds: '5', day: '4' },
      { date: '6', month: 1, year: 2022, hours: '22', minutes: '10', seconds: '5', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '12', minutes: '3', seconds: '2', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '12', minutes: '3', seconds: '2', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '12', minutes: '3', seconds: '2', day: '4' },
      { date: '8', month: 1, year: 2022, hours: '5', minutes: '45', seconds: '12', day: '4' },
      { date: '8', month: 1, year: 2022, hours: '5', minutes: '45', seconds: '12', day: '4' },
      { date: '8', month: 1, year: 2022, hours: '5', minutes: '45', seconds: '12', day: '4' },
      { date: '8', month: 1, year: 2022, hours: '5', minutes: '45', seconds: '12', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '3', minutes: '21', seconds: '6', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '3', minutes: '21', seconds: '6', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '3', minutes: '21', seconds: '6', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '3', minutes: '21', seconds: '6', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '3', minutes: '21', seconds: '6', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '17', minutes: '0', seconds: '3', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '17', minutes: '0', seconds: '3', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '17', minutes: '0', seconds: '3', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '17', minutes: '0', seconds: '3', day: '4' },
    ],
    color: '#FF7878',
  },
  {
    title: 'ranch',
    description: 'eating bacon',
    logTimestamps: [
      { date: '6', month: 1, year: 2022, hours: '22', minutes: '10', seconds: '5', day: '4' },
      { date: '6', month: 1, year: 2022, hours: '22', minutes: '10', seconds: '5', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '12', minutes: '3', seconds: '2', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '12', minutes: '3', seconds: '2', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '12', minutes: '3', seconds: '2', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '12', minutes: '3', seconds: '2', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '12', minutes: '3', seconds: '2', day: '4' },
      { date: '8', month: 1, year: 2022, hours: '5', minutes: '45', seconds: '12', day: '4' },
      { date: '8', month: 1, year: 2022, hours: '5', minutes: '45', seconds: '12', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '3', minutes: '21', seconds: '6', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '3', minutes: '21', seconds: '6', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '3', minutes: '21', seconds: '6', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '3', minutes: '21', seconds: '6', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '17', minutes: '0', seconds: '3', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '17', minutes: '0', seconds: '3', day: '4' },
    ],
    color: '#CEE5D0',
  },
];

const removeArrayDuplicates = (array: any[]) => {
  return Array.from(new Set(array));
};

export const getMonthDayYear = (timestamp: LogTimestamp): string => {
  return `${timestamp.month}/${timestamp.date}/${timestamp.year} `;
};

const getMinutes = (timestamp: LogTimestamp): string => {
  return `${timestamp.minutes}`;
};

const getSeconds = (timestamp: LogTimestamp): string => {
  return `${timestamp.seconds}`;
};
const getHours = (timestamp: LogTimestamp): string => {
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

// stopping here
// map over the selector and remove array
const mapTime = (logObjects: LogObject[], selector: string) => {
  return removeArrayDuplicates(
    logObjects
      .map((lo: LogObject) => {
        return lo.logTimestamps.map((timestamp: any) => getMonthDayYear(timestamp));
      })
      .flat()
  );
};

const createLabelArr = (logObject: LogObject): string[] => {
  const labels = removeArrayDuplicates(
    logObject.logTimestamps.map((timestamp: LogTimestamp) => getMonthDayYear(timestamp))
  );
  return labels;
};
const createLabelString = (logObject: LogObject): string => {
  let [label] = removeArrayDuplicates(
    logObject.logTimestamps.map((timestamp: LogTimestamp) => getMonthDayYear(timestamp))
  );

  return label;
};
const createLabelStrings = (loggers: LogObject[]) => {
  return removeArrayDuplicates(loggers.map((logger: LogObject) => createLabelString(logger)));
};

const createBarLabel = (logObject: LogObject): string => {
  return logObject.title;
};

const createDataObject = (logObject: LogObject, labels: any): any => {
  // const labels = createLabelArr(logObject);
  const barLabel = createBarLabel(logObject);
  const dateArr = logObject.logTimestamps.map((timestamp: any) => getMonthDayYear(timestamp));

  const dataObject = {
    label: barLabel,
    data: labels.map((label: any) => {
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

const createDataObjects = (logObject: LogObject[]): any => {
  const labels = mapTime(logObject, 'date');
  const dataObjects = logObject.map((obj) => createDataObject(obj, labels));
  return dataObjects;
};

interface BarChartProps {
  title: string;
  logObject: LogObject;
  date: string;
}

export default function BarChart(props: BarChartProps) {
  const { actionLoggers, setActionLoggers } = useLoggers();
  const dataDummy = {
    labels: mapTime(dummyLogObj, 'date'),
    datasets: createDataObjects(dummyLogObj),
  };

  const logObjEmpty = JSON.stringify(actionLoggers) === '[]';
  const data: any = logObjEmpty
    ? dataDummy
    : {
        labels: mapTime([props.logObject], `date`),
        datasets: createDataObjects([props.logObject]),
      };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: [props.title, props.date],
      },
    },
  };
  // set chart title to current selected logger
  return <Bar options={options} data={data} />;
}
