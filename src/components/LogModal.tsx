import { Modal } from 'react-bootstrap';
import List from './List';
import { LogTimestamp, LogObject } from '../interfaces/interfaces';
import BarChart, { getHourMinuteSecond, getMonthDayYear, dateToUSEST } from './BarChart';
import DatePicker from './DatePicker';
import { useEffect, useState } from 'react';

interface LogModalProps {
  show: boolean;
  close: Function;
  title: string;
  logObject: LogObject;
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
          <BarChart title={props.title} logObject={props.logObject} date="02/19/2022" />
          <List
            items={props.logObject.logTimestamps.map((timestamp) =>
              dateToUSEST(`${getMonthDayYear(timestamp)} ${getHourMinuteSecond(timestamp)}`)
            )}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
