import React, { useContext } from "react";
import { ExpensesContext } from "../context/expenses/ExpensesContext";

const ExpensesList = ({ expenses }) => {
  const { delExpense } = useContext(ExpensesContext);

  return (
    <>
      {expenses.map((expense) => (
        <tr key={expense._id}>
          <td>{expense.created.split("T")[0]}</td>
          <td>{expense.expense}</td>
          <td>${expense.amount}</td>
          <td>
            <button onClick={() => delExpense(expense._id)}>
              <i className="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default ExpensesList;
