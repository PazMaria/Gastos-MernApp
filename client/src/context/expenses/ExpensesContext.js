import React, { createContext, useReducer } from "react";
import ExpensesReducer from "./ExpensesReducer";
import axios from "axios";

const initialState = {
  expenses: [],
  error: null,
  loading: true,
};

export const ExpensesContext = createContext(initialState);

export const ExpensesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExpensesReducer, initialState);

  async function getExpenses() {
    try {
      const res = await axios.get("/api/expenses");
      dispatch({
        type: "GET_EXPENSES",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function addExpense(expense) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/expenses", expense, config);
      dispatch({
        type: "ADD_EXPENSE",
        payload: expense,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function delExpense(id) {
    try {
      await axios.delete(`/api/expenses/${id}`);
      dispatch({
        type: "DELETE_EXPENSE",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.response.data.error,
      });
    }
  }
  const clearExpenses = () => {
    dispatch({ type: "CLEAR_EXPENSES" });
  };

  return (
    <ExpensesContext.Provider
      value={{
        expenses: state.expenses,
        getExpenses,
        addExpense,
        delExpense,
        clearExpenses,
        error: state.error,
        loading: state.loading,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};
