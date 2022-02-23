import { useLoggers } from '../context/state';
import { useState } from 'react';
import { LogObject } from '../interfaces/interfaces';
export default function PatternForm() {
  const { actionLoggers, setActionLoggers } = useLoggers();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const resetValue = (id: string) => {
    let element: any = document.getElementById(id);
    if (element) {
      element.value = '';
    } else {
      console.log('element does not exist');
    }
  };

  return (
    <section style={{ display: 'flex', alignItems: 'center' }}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="">
            Logger
          </span>
        </div>
        <input
          id="create-logger-title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          className="form-control"
          placeholder="Title"
          aria-label="Pattern"
          aria-describedby="basic-addon1"
        />
        <input
          style={{ flexGrow: '2' }}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          id="create-logger-description"
          placeholder="Description"
          className="form-control"
          aria-label="Description"
        ></input>
      </div>
      <button
        title="add logger"
        style={{ marginLeft: '1rem' }}
        onClick={() => {
          setActionLoggers([
            ...actionLoggers,
            { title: title, description: description, logTimestamps: [] } as LogObject,
          ]);
          // reset title and description
          setDescription('');
          setTitle('');
          console.log(actionLoggers);
          const loggerIDs = ['create-logger-title', 'create-logger-description'];
          for (const logger of loggerIDs) {
            resetValue(logger);
          }
        }}
        type="button"
        className="btn btn-primary"
      >
        +
      </button>
    </section>
  );
}
