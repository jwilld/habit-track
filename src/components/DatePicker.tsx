import { useLoggers } from '../context/state';
import {
  SetStateAction,
  Dispatch,
  ChangeEventHandler,
  DetailedHTMLProps,
  InputHTMLAttributes,
  BaseSyntheticEvent,
  useState,
  useEffect,
} from 'react';
import { setDatasets } from 'react-chartjs-2/dist/utils';

const months = [
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
const years = [2021, 2022, 2023, 2024, 2025].map((year: number, i: number) => {
  return <option key={i}>{year}</option>;
});
const monthOptions = months.map((month: string, i: number) => {
  return <option key={i}>{month}</option>;
});

const dateToMonthDayYear = (date: Date) => {
  return date.toISOString().split('T')[0];
};

const currentDate = dateToMonthDayYear(new Date());

export default function DatePicker() {
  const { date, setDate, month, setMonth, setActiveDateType } = useLoggers();

  // const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  // const [month, setMonth] = useState<string>();

  return (
    <div style={{ display: 'flex' }}>
      <select
        onChange={(event: BaseSyntheticEvent) => {
          setMonth(event.target.value);
          setActiveDateType('month');
        }}
        value={month}
        className="form-select"
        aria-label="Default select example"
        >
        {monthOptions}
      </select>
      <input
        style={{ width: '300px' }}
        type="date"
        id="start"
        name="trip-start"
        value={date}
        // probably set it to when the user creates the account
        min="2018-01-01"
        max={currentDate}
        onChange={(event: BaseSyntheticEvent) => {
          setDate(dateToMonthDayYear(new Date(event.target?.valueAsDate)));
          setActiveDateType('date');
        }}
      ></input>
    </div>
  );
}
