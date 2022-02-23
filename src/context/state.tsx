import { createContext, useContext, useReducer, useState } from 'react';

export const AppContext = createContext<any>(undefined);

export function GlobalStateProvider({ children }: any) {
  const [actionLoggers, setActionLoggers] = useState([]);
  const [date, setDate] = useState<string>();
  const [month, setMonth] = useState<string>();
  return (
    <AppContext.Provider
      value={{ actionLoggers, setActionLoggers, date, setDate, month, setMonth }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useLoggers() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useLoggers must be inside a `GlobalStateProvider`');
  }
  return context;
}
