import React, { useContext } from "react";
import { ExpensesContext } from "../context/expenses/ExpensesContext";
import { Bar } from "react-chartjs-2";
import { jan, feb } from "../scripts/functions";

export const YearBarChart = () => {
  const { expenses } = useContext(ExpensesContext);
  const chartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Expenses 2020",
        data: [1000, 2300],
        backgroundColor: ["#05acd3", "#05acd3"],
      },
      {
        label: "Expenses 2019",
        data: [1654, 2100],
        backgroundColor: ["#bbbf95", "#bbbf95"],
      },
    ],
  };
  const options = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 150000,
            stepSize: 10000,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };
  return (
    <div className="chart">
      <Bar data={chartData} options={options} />
    </div>
  );
};
