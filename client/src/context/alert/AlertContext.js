import React, { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";
import uuid from "uuid/v1";

const initialState = [];

export const AlertContext = createContext(initialState);

export const AlertContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // actions
  const setAlert = (msg, type, timeout = 4000) => {
    const id = uuid();
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type, id },
    });

    setTimeout(() => dispatch({ type: "REMOVE_ALERT", payload: id }), timeout);
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
