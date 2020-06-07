import React, { useState, useContext, useEffect } from "react";
import SideBar from "./Sidebar";
import ExpensesTotals from "./ExpensesTotals";
import Expenses from "./Expenses";
import Reports from "./Reports";
import Settings from "./Settings";
import { AuthContext } from "../context/auth/AuthContext";

const Home = () => {
  const [route, setRoute] = useState("totals");
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
  }, []);

  const onRouteChange = (route) => {
    setRoute(route);
  };
  return (
    <div className="content">
      <div className="sideBar">
        <SideBar onRouteChange={onRouteChange} />
      </div>
      <div className="tabContent">
        {route === "totals" ? (
          <ExpensesTotals onRouteChange={onRouteChange} />
        ) : route === "expenses" ? (
          <Expenses onRouteChange={onRouteChange} />
        ) : route === "reports" ? (
          <Reports onRouteChange={onRouteChange} />
        ) : (
          <Settings onRouteChange={onRouteChange} />
        )}
      </div>
    </div>
  );
};

export default Home;
