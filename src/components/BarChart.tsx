import { useLoggers } from '../context/state';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { LogObject, LogTimestamp } from '../interfaces/interfaces';

import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const dummyLogObj = [
  {
    title: 'chicken',
    description: 'eating chicken',
    logTimestamps: [{ date: '6', month: 1, year: 2022, time: '1641529071565', day: '4' }],
  },
  {
    title: 'bacon',
    description: 'eating bacon',
    logTimestamps: [{ date: '7', month: 1, year: 2022, time: '1641529071565', day: '4' }],
  },
  {
    title: 'ranch',
    description: 'eating bacon',
    logTimestamps: [
      { date: '8', month: 1, year: 2022, time: '1641529071565', day: '4' },
      { date: '7', month: 1, year: 2022, time: '1641529071565', day: '4' },
      { date: '7', month: 1, year: 2022, time: '1641529071565', day: '4' },
    ],
  },
];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'example chart',
    },
  },
};
const createMonthDayYear = (timestamp: LogTimestamp) => {
  return `${timestamp.month}/${timestamp.date}/${timestamp.year} `;
};

const createLabelArr = (logObject: LogObject): string[] => {
  const labels = Array.from(
    new Set(logObject.logTimestamps.map((timestamp: LogTimestamp) => createMonthDayYear(timestamp)))
  );
  return labels;
};
const createLabelString = (logObject: LogObject): string => {
  let [label] = Array.from(
    new Set(logObject.logTimestamps.map((timestamp: LogTimestamp) => createMonthDayYear(timestamp)))
  );

  return label;
};
const createLabelStrings = (loggers: LogObject[]) => {
  return Array.from(new Set(loggers.map((logger: LogObject) => createLabelString(logger))));
};

const createBarLabel = (logObject: LogObject): string => {
  return logObject.title;
};

const createDataObject = (logObject: LogObject, labels: any): any => {
  // const labels = createLabelArr(logObject);
  const barLabel = createBarLabel(logObject);
  const dateArr = logObject.logTimestamps.map((timestamp: any) => createMonthDayYear(timestamp));

  const dataObject = {
    label: barLabel,
    data: labels.map((label: any) => {
      let count = undefined;
      if (dateArr.includes(label)) {
        count = dateArr.filter((date) => date === label).length;
      }
      return count;
    }),

    backgroundColor: '#97BFB4',
  };
  return dataObject;
};

const createDataObjects = (logObject: LogObject[]): any => {
  const labels = logObject.map((obj) => createLabelArr(obj)[0]);
  const dataObjects = logObject.map((obj) => createDataObject(obj, labels));
  return dataObjects;
};

export default function BarChart() {
  const { actionLoggers, setActionLoggers } = useLoggers();
  const dataDummy = {
    labels: createLabelStrings(dummyLogObj),
    datasets: createDataObjects(dummyLogObj),
  };

  const logObjEmpty = JSON.stringify(actionLoggers) === '[]';
  const data: any = logObjEmpty
    ? dataDummy
    : {
        datasets: createDataObjects(actionLoggers),
        labels: createLabelStrings(actionLoggers),
      };
  return <Bar options={options} data={data} />;
}
