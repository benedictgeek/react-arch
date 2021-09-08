import React, { useReducer, useContext } from "react";
import { login, updateUser, logout } from "./actions";
import { userReducer } from "./reducer";

const UserContext = React.createContext();

export let useUserContext = () => useContext(UserContext);
let initialState = {
  isAuthenticated: false,
  isCheckingAuth: false,
  doneCheckingAuth: false,
  token: "",
  user: null,
  userAssociation: null,
};

export let UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const setLoginDispatch = (payload) => {
    login(payload, dispatch);
  };
  const setUpdateUserDispatch = (payload) => {
    updateUser(payload, dispatch);
  };
  const setLogoutDispatch = (payload) => {
    logout(payload, dispatch);
  };

  return (
    <UserContext.Provider
      value={{
        state,
        setLoginDispatch,
        setUpdateUserDispatch,
        setLogoutDispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
