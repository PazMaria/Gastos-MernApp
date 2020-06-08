import React, { useContext, useEffect } from "react";
import { ExpensesContext } from "../context/expenses/ExpensesContext";
import { daily, monthly, yearly } from "../scripts/functions";
import { YearBarChart } from "./YearBarChart";

const ExpensesTotals = () => {
  const { expenses, getExpenses } = useContext(ExpensesContext);

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <>
      <div className="top">
        <h2 className="dataTitle">Totals</h2>
      </div>
      <div className="home">
        <div className="home-totals">
          <div className="el">
            <p className="pLabel">Today</p>
            <p className="pTotal">${daily(expenses)}</p>
          </div>

          <div className="el">
            <p className="pLabel">Month</p>
            <p className="pTotal">${monthly(expenses)}</p>
          </div>

          <div className="el">
            <p className="pLabel">Year</p>
            <p className="pTotal">${yearly(expenses)}</p>
          </div>
        </div>
        <div className="home-chart">
          <YearBarChart />
        </div>
      </div>
    </>
  );
};

export default ExpensesTotals;
