import React, { useState, useContext, useEffect } from "react";
import { AlertContext } from "../context/alert/AlertContext";
import { AuthContext } from "../context/auth/AuthContext";

const Register = (props) => {
  const { setAlert } = useContext(AlertContext);
  const { register, error, clearErrors, isAuthenticated } = useContext(
    AuthContext
  );

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "User already exists") {
      setAlert(error, "danger");
      clearErrors();
    }
  }, [error, isAuthenticated, props.history, setAlert]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <div className="form-container user">
      <h1>New Account</h1>
      <form>
        <div className="fieldset">
          {/* <label htmlFor="name">Name</label> */}
          <input
            placeholder="Name"
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
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
          {/* <label htmlFor="password2">Confirm Password</label> */}
          <input
            placeholder="Confirm Password"
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <div className="fieldset">
          <input
            type="submit"
            value="Register"
            className="btn"
            onClick={onSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
