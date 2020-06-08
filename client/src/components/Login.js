import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/auth/AuthContext";
import { AlertContext } from "../context/alert/AlertContext";
import Alerts from "./Alerts";
import transfer from "../images/transfer.svg";
import wave2 from "../images/wave2.png";

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
  }, [error, isAuthenticated, props.history, setAlert]);

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
    <>
      <img className="wave" src={wave2} />
      <div className="container">
        <div className="img">
          <img src={transfer} />
        </div>

        <div className="form-container user">
          <h1>Welcome</h1>
          <form onSubmit={onSubmit}>
            <div className="fieldset">
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
                className="btn first"
                onClick={onSubmit}
              />
            </div>
          </form>
          <div className="alert">
            <Alerts />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
