import React, { useState, useContext } from "react";
import { ExpensesContext } from "../context/expenses/ExpensesContext";

const ExpensesForm = () => {
  const { addExpense } = useContext(ExpensesContext);

  const [created, setCreated] = useState(new Date());
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      created: created,
      expense: expense,
      amount: Number(amount),
    };
    addExpense(newExpense);
    setCreated(new Date());
    setExpense("");
    setAmount("");
  };
  return (
    <div className="form-container ex">
      <form onSubmit={handleSubmit}>
        <div className="fieldset">
          <div className="col-sm-10">
            <input
              type="date"
              required
              className="form-control"
              id="date"
              value={created}
              onChange={(e) => setCreated(e.target.value)}
            />
          </div>
        </div>
        <div className="fieldset">
          <div className="col-sm-10">
            <input
              placeholder="Expense"
              type="text"
              required
              className="form-control"
              value={expense}
              onChange={(e) => setExpense(e.target.value)}
            />
          </div>
        </div>
        <div className="fieldset">
          <div className="col-sm-10">
            <input
              placeholder="Amount"
              type="number"
              required
              className="form-control"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-10 formButton">
          <input type="submit" value="Save" className="btn" />
        </div>
      </form>
    </div>
  );
};

export default ExpensesForm;
