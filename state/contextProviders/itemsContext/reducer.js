import { SET_ITEMS, ADD_ITEM, REMOVE_ITEM } from "./types";

export const itemsReducer = (state, action) => {
  let updatedItems = [];
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload,
        page: state.page + 1,
        isLoading: false,
      };

    case ADD_ITEM:
      updatedItems = [...state.items];
      updatedItems.unshift(action.payload);
      return {
        ...state,
        items: updatedItems,
      };

    case REMOVE_ITEM:
      updatedItems = [...state.items];
      updatedItems = updatedItems.filter(
        (item) => item.id != action.payload.id
      );
      return {
        ...state,
        items: updatedItems,
      };

    default:
      return state;
  }
};
