import React from "react";

export interface ReduxContextProps {
  state: Object;
  setState: (state: Object) => void;
  runReducers: (
    reducers: Object,
    state?: any,
    action?: any
  ) => {
    [x: string]: any;
  };
  dispatch: (action?: any) => void;
}

export interface ReduxProps {
  children: React.ReactNode;
  store: { reducers: Object };
}
