import { SET_ITEMS, ADD_ITEM, REMOVE_ITEM } from "./types";

export let setItems = (payload, dispatch) => {
  dispatch({ type: SET_ITEMS, payload: payload });
};

export let addItem = (payload, dispatch) => {
  dispatch({ type: ADD_ITEM, payload: payload });
};

export let removeItem = (payload, dispatch) => {
  dispatch({ type: REMOVE_ITEM, payload: payload });
};
