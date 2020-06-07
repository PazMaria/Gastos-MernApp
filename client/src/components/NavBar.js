import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";
import { ExpensesContext } from "../context/expenses/ExpensesContext";

const Navbar = () => {
  const { isAuthenticated, logout, user } = useContext(AuthContext);
  const { clearExpenses } = useContext(ExpensesContext);

  const onLogout = () => {
    logout();
    clearExpenses();
  };

  const authLinks = (
    <>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </>
  );
  const guestLinks = (
    <>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  );

  return (
    <div className="navbar">
      <h1 className="titleName">Gastos</h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

export default Navbar;
