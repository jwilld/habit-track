import { Modal } from 'react-bootstrap';
import List from './List';
import { LogTimestamp, LogObject } from '../interfaces/interfaces';
import BarChart, { getHourMinuteSecond, getMonthDayYear, dateToUSEST } from './BarChart';
import DatePicker from './DatePicker';

interface LogModalProps {
  show: boolean;
  close: Function;
  title: string;
  timestamps: LogTimestamp[];
}

export default function LogModal(props: LogModalProps) {
  return (
    <>
      <Modal
        show={props.show}
        fullscreen="xxl-down"
        onHide={() => {
          props.close();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DatePicker />
          <BarChart />
          <List
            items={props.timestamps.map((timestamp) =>
              dateToUSEST(`${getMonthDayYear(timestamp)} ${getHourMinuteSecond(timestamp)}`)
            )}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
