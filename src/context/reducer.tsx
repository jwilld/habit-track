export default function reducer(state: any, action: any) {
  switch (action.type) {
    case 'UPDATE_LOGGERS':
      return {
        actionLoggers: [...state.actionLoggers, action.payload],
      };
    default:
      throw 'incorrect call';
  }
}
