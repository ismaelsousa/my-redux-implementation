import React, { createContext, useCallback, useState } from "react";
import { ReduxContextProps, ReduxProps } from "./types";

export const Context = createContext<ReduxContextProps>({
  state: {},
  setState: () => {},
  runReducers: () => ({}),
  dispatch:()=>{}
});

const Provider = Context.Provider;

const Redux = ({ children, store }: ReduxProps) => {
  const runReducers = useCallback((reducers: Object, state?: any, action?: any) => {
    return Object.entries(reducers)
      .map(([key, reducer]) => ({ [key]: reducer(state?.[key], action) }))
      .reduce((obj, item) => ({ ...obj, ...item }), {});
  },[]);

  const [state, setState] = useState<Object>(() => {
    return runReducers(store.reducers);
  });

  const dispatch = useCallback((action:any)=> {
    setState(oldState=> runReducers(store.reducers, oldState, action))
   },[runReducers,  store.reducers])

  return (
    <Provider value={{ state, setState, runReducers, dispatch }}>{children}</Provider>
  );
};

export default Redux;
