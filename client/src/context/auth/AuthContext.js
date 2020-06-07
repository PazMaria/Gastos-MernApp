import React, { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
  error: null,
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // actions
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get("/api/login");
      console.log(res);

      dispatch({
        type: "USER_LOADED",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({ type: "AUTH_ERROR" });
    }
  };

  const register = async (user) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/register", user, config);

      dispatch({
        type: "REGISTER_SUCCESS",
        payload: res.data,
      });

      loadUser();
    } catch (error) {
      dispatch({
        type: "REGISTER_FAIL",
        payload: error.response.data.msg,
      });
    }
  };

  const login = async (user) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/login", user, config);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data,
      });

      loadUser();
    } catch (error) {
      dispatch({
        type: "LOGIN_FAIL",
        payload: error.response.data.msg,
      });
    }
  };

  const logout = () => dispatch({ type: "LOGOUT" });

  const clearErrors = () => dispatch({ type: "CLEAR_ERRORS" });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        clearErrors,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
