import React, { Reducer, useContext, useReducer } from "react";
import { createContext } from "react";
import { Action, AppState, AppStore } from "./types";

const initialState: AppState = {
  activeCredit: null,
  user: {
    name: "",
    authorized: false,
  },
};

const StoreContext = createContext({} as AppStore);

const reducer = (state: AppState, action: Action) => {
  const { type, payload } = action;

  console.log(state, action);

  switch (type) {
    case "login": {
      return {
        ...state,
        user: {
          name: "test user 1",
          authorized: true,
        },
      };
    }
    case "logout": {
      return {
        ...state,
        user: {
          name: "",
          authorized: false,
        },
      };
    }
  }

  return state;
};

const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<AppState, Action>>(
    reducer,
    initialState
  );

  const asyncDispatch = async (actionOrFunc: Action | Function) => {
    let action = actionOrFunc;
    if (typeof actionOrFunc === "function") {
      action = await actionOrFunc();
      console.log(action);
    }

    dispatch(action as Action);
  };

  return (
    <StoreContext.Provider value={{ state, dispatch: asyncDispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext);

const useState = () => {
  const { state } = useStore();

  return state;
};

const useStoreDispatch = () => {
  const { dispatch } = useStore();

  return dispatch;
};

export { StoreProvider, useState, useStoreDispatch };
