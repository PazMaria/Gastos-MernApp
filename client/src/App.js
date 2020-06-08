import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

import { ExpensesContextProvider } from "./context/expenses/ExpensesContext";
import { AuthContextProvider } from "./context/auth/AuthContext";
import { AlertContextProvider } from "./context/alert/AlertContext";
import setAuthToken from "./utils/setAuthToken";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthContextProvider>
      <ExpensesContextProvider>
        <AlertContextProvider>
          <BrowserRouter>
            <Navbar />
            <>
              <div className="main">
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </>
          </BrowserRouter>
        </AlertContextProvider>
      </ExpensesContextProvider>
    </AuthContextProvider>
  );
};

export default App;
