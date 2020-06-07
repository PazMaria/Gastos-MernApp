import React, { useContext } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesForm from "./ExpensesForm";
import { ExpensesContext } from "../context/expenses/ExpensesContext";

const Expenses = () => {
  const { expenses } = useContext(ExpensesContext);

  return (
    <>
      <div className="top">
        <div className="dataTitle">Add Expenses</div>
      </div>
      <div className="expenses">
        <div className="divForm">
          <ExpensesForm />
        </div>
        <div className="divTable">
          <table className="table">
            <thead className="thead">
              <tr>
                <th>Date</th>
                <th>Expense</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <ExpensesList expenses={expenses} />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Expenses;
