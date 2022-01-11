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
    logTimestamps: [
      { date: '6', month: 1, year: 2022, hours: '22', minutes: '10', seconds: '5', day: '4' },
      { date: '6', month: 1, year: 2022, hours: '22', minutes: '10', seconds: '5', day: '4' },
      { date: '6', month: 1, year: 2022, hours: '22', minutes: '10', seconds: '5', day: '4' },
      { date: '6', month: 1, year: 2022, hours: '22', minutes: '10', seconds: '5', day: '4' },
      { date: '6', month: 1, year: 2022, hours: '22', minutes: '10', seconds: '5', day: '4' },
      { date: '6', month: 1, year: 2022, hours: '22', minutes: '10', seconds: '5', day: '4' },
    ],
    color: '#F3F0D7',
  },
  {
    title: 'bacon',
    description: 'eating bacon',
    logTimestamps: [
      { date: '7', month: 1, year: 2022, hours: '12', minutes: '3', seconds: '2', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '12', minutes: '3', seconds: '2', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '12', minutes: '3', seconds: '2', day: '4' },
    ],
    color: '#FF7878',
  },
  {
    title: 'ranch',
    description: 'eating bacon',
    logTimestamps: [
      { date: '8', month: 1, year: 2022, hours: '5', minutes: '45', seconds: '12', day: '4' },
      { date: '8', month: 1, year: 2022, hours: '5', minutes: '45', seconds: '12', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '3', minutes: '21', seconds: '6', day: '4' },
      { date: '7', month: 1, year: 2022, hours: '17', minutes: '0', seconds: '3', day: '4' },
    ],
    color: '#CEE5D0',
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
const removeArrayDuplicates = (array: any[]) => {
  return Array.from(new Set(array));
};

const getMonthDayYear = (timestamp: LogTimestamp): string => {
  return `${timestamp.month}/${timestamp.date}/${timestamp.year} `;
};

const getHours = (timestamp: LogTimestamp): string => {
  return `${timestamp.hours}`;
};

const getMinutes = (timestamp: LogTimestamp): string => {
  return `${timestamp.minutes}`;
};

const getSeconds = (timestamp: LogTimestamp): string => {
  return `${timestamp.seconds}`;
};

// stopping here
// map over the selector and remove array
const mapTime = (logObjects: LogObject[], selector: string) => {
  return removeArrayDuplicates(
    logObjects
      .map((lo: LogObject) => {
        return lo.logTimestamps.map((timestamp: any) => timestamp[selector]);
      })
      .flat()
  );
};

const createLabelArr = (logObject: LogObject): string[] => {
  const labels = removeArrayDuplicates(
    logObject.logTimestamps.map((timestamp: LogTimestamp) => getSeconds(timestamp))
  );
  return labels;
};
const createLabelString = (logObject: LogObject): string => {
  let [label] = removeArrayDuplicates(
    logObject.logTimestamps.map((timestamp: LogTimestamp) => getSeconds(timestamp))
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
  const dateArr = logObject.logTimestamps.map((timestamp: any) => getHours(timestamp));

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
  const labels = mapTime(dummyLogObj, 'hours');
  const dataObjects = logObject.map((obj) => createDataObject(obj, labels));
  return dataObjects;
};

export default function BarChart() {
  const { actionLoggers, setActionLoggers } = useLoggers();
  const dataDummy = {
    labels: mapTime(dummyLogObj, 'hours'),
    datasets: createDataObjects(dummyLogObj),
  };
  console.log(mapTime(dummyLogObj, 'hours'));
  console.log(dataDummy);

  const logObjEmpty = JSON.stringify(actionLoggers) === '[]';
  const data: any = logObjEmpty
    ? dataDummy
    : {
        datasets: createDataObjects(actionLoggers),
        labels: createLabelStrings(actionLoggers),
      };
  return <Bar options={options} data={data} />;
}
