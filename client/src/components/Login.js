import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/auth/AuthContext";
import { AlertContext } from "../context/alert/AlertContext";

const Login = (props) => {
  const { setAlert } = useContext(AlertContext);
  const { login, error, clearErrors, isAuthenticated } = useContext(
    AuthContext
  );

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "Invalid user information") {
      setAlert(error, "danger");
      clearErrors();
    }
  }, [isAuthenticated, props.history, setAlert]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill in all fields", "danger");
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    <div className="form-container user">
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <div className="fieldset">
          {/* <label htmlFor="email">Email Address</label> */}
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="fieldset">
          {/* <label htmlFor="password">Password</label> */}
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <div className="fieldset">
          <input
            type="submit"
            value="Login"
            className="btn btn-primary btn-block"
          />
        </div>
      </form>
    </div>
  );
};
export default Login;
