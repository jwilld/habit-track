import { createContext, useContext, useReducer, useState } from 'react';

export const AppContext = createContext<any>(undefined);

export function GlobalStateProvider({ children }: any) {
  const [actionLoggers, setActionLoggers] = useState([]);
  return (
    <AppContext.Provider value={{ actionLoggers, setActionLoggers }}>
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
