import React, { useReducer, useContext } from "react";
import { setItems, addItem, removeItem } from "./actions";
import { itemsReducer } from "./reducer";

const ItemsContext = React.createContext();

export let useItemsContext = () => useContext(ItemsContext);
let initialState = {
  items: [],
  item: {},
  page: 0,
  isLoading: true,
};

export let ItemsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(itemsReducer, initialState);
  const setItemsDispatch = (result) => {
    setItems(result, dispatch);
  };

  const setAddItem = (item) => {
    addItem(item, dispatch);
  };

  const removeItemDispatch = (item) => {
    removeItem(item, dispatch);
  };

  return (
    <ItemsContext.Provider
      value={{
        state,
        setItemsDispatch,
        setAddItem,
        removeItemDispatch,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
