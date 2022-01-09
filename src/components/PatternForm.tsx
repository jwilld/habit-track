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
    <section>
      <div className="input-group mb-3">
        <input
          id="create-logger-title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          className="form-control"
          placeholder="Title, i.e., snacking, smoking..."
          aria-label="Pattern"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group">
        <textarea
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          id="create-logger-description"
          placeholder="Description"
          className="form-control"
          aria-label="Description"
        ></textarea>
      </div>
      <ul className="list-group"></ul>
      <button
        onClick={() => {
          setActionLoggers([
            ...actionLoggers,
            { title: title, description: description, logTimestamps: [] } as LogObject,
          ]);
          console.log(actionLoggers);
          const loggerIDs = ['create-logger-title', 'create-logger-description'];
          for (const logger of loggerIDs) {
            resetValue(logger);
          }
        }}
        type="button"
        className="btn btn-primary"
      >
        Create Tracker
      </button>
    </section>
  );
}
