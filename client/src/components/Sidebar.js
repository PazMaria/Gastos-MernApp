import React, { useState } from "react";

const Sidebar = ({ onRouteChange }) => {
  const [active, setActive] = useState("totals");

  const isActive = (tab) => {
    setActive(tab);
  };
  return (
    <>
      <div className="tabs__sidebar">
        <button
          className={
            active === "totals"
              ? "tabs__button tabs__button--active"
              : "tabs__button"
          }
          onClick={() => {
            onRouteChange("totals");
            isActive("totals");
          }}
        >
          Totals
        </button>
        <button
          className={
            active === "expenses"
              ? "tabs__button tabs__button--active"
              : "tabs__button"
          }
          onClick={() => {
            onRouteChange("expenses");
            isActive("expenses");
          }}
        >
          Add Expense
        </button>
        <button
          className={
            active === "reports"
              ? "tabs__button tabs__button--active"
              : "tabs__button"
          }
          onClick={() => {
            onRouteChange("reports");
            isActive("reports");
          }}
        >
          Reports
        </button>
        <button
          className={
            active === "settings"
              ? "tabs__button tabs__button--active"
              : "tabs__button"
          }
          onClick={() => {
            onRouteChange("settings");
            isActive("settings");
          }}
        >
          Settings
        </button>
      </div>
    </>
  );
};

export default Sidebar;
