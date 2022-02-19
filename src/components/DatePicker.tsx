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

export default function DatePicker() {
  return (
    <div style={{ display: 'flex' }}>
      <select className="form-select" aria-label="Default select example">
        {monthOptions}
      </select>
      <input
        style={{ width: '300px' }}
        type="date"
        id="start"
        name="trip-start"
        value="2018-07-22"
        min="2018-01-01"
        max="2018-12-31"
      ></input>
    </div>
  );
}
