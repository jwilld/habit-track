import { useLoggers } from '../context/state';
import { LogTimestamp, LogObject } from '../interfaces/interfaces';

export default function Card() {
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
  return actionLoggers.map((logger: any, i: number) => (
    <div key={i} className="card" style={{ minWidth: '400px', flexGrow: '0', border: 'none' }}>
      <div
        className="card-body"
        style={{ display: 'flex', justifyContent: 'space-between', flexBasis: '100px' }}
      >
        <div>
          <h5 className="card-title">{logger.title}</h5>
          <p className="card-text">{logger.description}</p>
          <button className="btn btn-outline-primary">View Logs</button>
        </div>
        <div className="d-grid" style={{ alignSelf: 'stretch', display: 'flex' }}>
          <button
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            className="btn btn-primary"
            onClick={(event) => {
              event.preventDefault();
              const index = actionLoggers.findIndex(
                (currentLogger: any) => currentLogger.title === logger.title
              );
              const updatedLogger: LogObject = logger;
              updatedLogger.logTimestamps.push(createLogTimestamp());
              let updatedActionLoggers = actionLoggers;
              updatedActionLoggers.splice(index, 1);
              setActionLoggers([...updatedActionLoggers, updatedLogger]);
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
