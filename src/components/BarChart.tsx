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
import { dummyLogObj } from '../dummy-data/charts';
import { mapTime, createDataObjects, DataObject } from '../utils/charts';

import { Bar } from 'react-chartjs-2';
import { _DeepPartialObject } from 'chart.js/types/utils';
import { months, dateToYearMonthDay } from '../utils/dates';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// stopping here

interface BarChartProps {
  title: string;
  logObject: LogObject;
  date: string;
}

interface ChartData {
  labels: string[];
  datasets: DataObject[];
}

export default function BarChart(props: BarChartProps) {
  const globalState = useLoggers();
  const dataDummy = {
    labels: mapTime(dummyLogObj, 'date'),
    datasets: createDataObjects(dummyLogObj),
  };

  let filteredLogObject: LogObject = props.logObject;

  // find a way to make a method for these--not urgent
  if (globalState.activeDateType === 'month') {
    const filteredMonths = props.logObject.logTimestamps.filter(
      ({ month }) => month === months.indexOf(globalState.month) + 1
    );
    filteredLogObject = {
      ...props.logObject,
    };
    filteredLogObject.logTimestamps = filteredMonths;
  }

  if (globalState.activeDateType === 'date') {
    const filteredDates = props.logObject.logTimestamps.filter(
      ({ month, date, year }) =>
        globalState.date === dateToYearMonthDay(new Date(`${month}/${date}/${year}`))
    );
    filteredLogObject = {
      ...props.logObject,
    };
    filteredLogObject.logTimestamps = filteredDates;
  }

  const logObjEmpty = JSON.stringify(globalState.actionLoggers) === '[]';
  const data: ChartData = logObjEmpty
    ? dataDummy
    : {
        labels: mapTime([props.logObject], `date`),
        datasets: createDataObjects([filteredLogObject]),
      };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: [
          props.title,
          globalState.activeDateType === 'date' ? globalState.date : globalState.month ?? '',
        ],
      },
    },
  };
  // set chart title to current selected logger
  return <Bar options={options} data={data} />;
}
