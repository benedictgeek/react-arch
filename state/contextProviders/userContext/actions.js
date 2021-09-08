import { LOGIN, UPDATE_USER, LOGOUT } from "./types";

export let login = (payload, dispatch) => {
  dispatch({ type: LOGIN, payload: payload });
};

export let updateUser = (payload, dispatch) => {
  dispatch({ type: UPDATE_USER, payload: payload });
};

export let logout = (payload, dispatch) => {
  dispatch({ type: LOGOUT, payload: payload });
};
