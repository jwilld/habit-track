import { useLoggers } from '../context/state';
import { months, dateToYearMonthDay } from '../utils/dates';
import { BaseSyntheticEvent } from 'react';

const monthOptions = months.map((month: string, i: number) => {
  return <option key={i}>{month}</option>;
});

const currentDate = dateToYearMonthDay(new Date());

export default function DatePicker() {
  const { date, setDate, month, setMonth, setActiveDateType } = useLoggers();

  return (
    <div style={{ display: 'flex' }}>
      <select
        onChange={(event: BaseSyntheticEvent) => {
          setMonth(event.target.value);
          setActiveDateType('month');
        }}
        defaultValue={months[new Date().getMonth()]}
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
          setDate(dateToYearMonthDay(new Date(event.target?.valueAsDate)));
          setActiveDateType('date');
        }}
      ></input>
    </div>
  );
}
