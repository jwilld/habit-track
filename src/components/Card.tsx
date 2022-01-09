import { useLoggers } from '../context/state';
import { LogTimestamp, LogObject } from '../interfaces/interfaces';
export default function Card() {
  const createLogTimestamp = (): LogTimestamp => {
    const date = new Date();
    const logObject: LogTimestamp = {
      date: date.getDate().toString(),
      month: date.getMonth() + 1, 
      year: date.getFullYear(),
      time: date.getTime().toString(),
      day: date.getDay().toString(),
    };
    return logObject;
  };
  const { actionLoggers, setActionLoggers } = useLoggers();
  return actionLoggers.map((logger: any, i: number) => (
    <div key={i} className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{logger.title}</h5>
        <p className="card-text">{logger.description}</p>
        <div className="d-grid">
          <a
            href="#"
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
          </a>
        </div>
      </div>
    </div>
  ));
}
