import { useState } from 'react';
import { useLoggers } from '../context/state';
import { LogTimestamp, LogObject } from '../interfaces/interfaces';
import LogModal from './LogModal';

export default function Card() {
  const [showLogs, setShowLogs] = useState<string | null>();
  const createLogTimestamp = (): LogTimestamp => {
    const date = new Date();
    const logObject: LogTimestamp = {
      date: date.getDate().toString(),
      month: date.getMonth() + 1,
      day: date.getDay().toString(),
      year: date.getFullYear(),
      hours: date.getHours().toString(),
      minutes: date.getMinutes().toString(),
      seconds: date.getSeconds().toString(),
    };
    return logObject;
  };
  const { actionLoggers, setActionLoggers } = useLoggers();

  return actionLoggers.map((logger: LogObject, i: number) => (
    <div key={i} className="card" style={{ minWidth: '400px', flexGrow: '0', border: 'none' }}>
      <LogModal
        show={showLogs === logger.title}
        close={() => {
          setShowLogs(null);
        }}
        title={`${logger.title} Logs`}
        logObject={logger}
      />
      <div
        className="card-body"
        style={{ display: 'flex', justifyContent: 'space-between', flexBasis: '100px' }}
      >
        <div>
          <h5 className="card-title">{logger.title}</h5>
          <p className="card-text">{logger.description}</p>
          <button
            title={logger.title}
            className="btn btn-outline-primary"
            onClick={() => {
              showLogs === logger.title ? setShowLogs(null) : setShowLogs(logger.title);
            }}
          >
            Show Logs
          </button>
        </div>
        <div className="d-grid" style={{ alignSelf: 'stretch', display: 'flex' }}>
          <button
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            className="btn btn-primary"
            onClick={(event) => {
              event.preventDefault();
              const index = actionLoggers.findIndex(
                (currentLogger: LogObject) => currentLogger.title === logger.title
              );
              const updatedLogger: LogObject = logger;
              updatedLogger.logTimestamps.push(createLogTimestamp());
              let updatedActionLoggers = actionLoggers;
              updatedActionLoggers[index] = updatedLogger;
              setActionLoggers([...updatedActionLoggers]);
              console.log(actionLoggers);
            }}
          >
            LOG
          </button>
        </div>
      </div>
    </div>
  ));
}
