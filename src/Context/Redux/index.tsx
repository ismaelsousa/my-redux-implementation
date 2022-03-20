import { createContext, useCallback, useRef } from "react";
import { ReduxContextProps, ReduxProps } from "./types";

export const Context = createContext<ReduxContextProps>({
  state: {},
  runReducers: () => ({}),
  dispatch: () => {},
  subscribe: () => ()=>{},
});

const Provider = Context.Provider;

const Redux = ({ children, store }: ReduxProps) => {
  const listeners = useRef<Array<Function>>([]);

  const subscribe = useCallback(
    (func: Function) => {
      listeners.current.push(func)
      // unsubscribe function
      return () => {
        const index = listeners.current.indexOf(func)
        listeners.current.splice(index, 1)
      }
    },
    []
  );

  const getInitialState = useCallback((reducers: Object, action?: any) => {
    const result = Object.entries(reducers)
      .map(([key, reducer]) => ({ [key]: reducer(undefined, action) }))
      .reduce((obj, item) => ({ ...obj, ...item }), {});
    return result;
  }, []);

  const { current: state } = useRef(getInitialState(store.reducers));

  const runReducers = useCallback((reducers: any, state: any, action?: any) => {
    Object.keys(state).forEach((key) => {
      // auth(state, action)
      const newSlice = reducers[key](state[key], action);

      if (newSlice === state[key]) {
        console.log("yes");
      } else {
        listeners.current.forEach((listener) => {
          // Calling listeners");
          listener({ ...state, [key]: newSlice });
        });
        console.log("no");
      }

      state[key] = newSlice;
    });

    return state;
  }, []);

  const dispatch = useCallback(
    (action: any) => {
      runReducers(store.reducers, state, action);
    },
    [runReducers, state, store.reducers]
  );

  return (
    <Provider value={{ state, runReducers, dispatch, subscribe }}>
      {children}
    </Provider>
  );
};

export default Redux;
