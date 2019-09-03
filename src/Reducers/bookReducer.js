import uuid from "uuid/v1";

export const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      action.book.id = uuid();
      return [...state, action.book];
    case "REMOVE_BOOK":
      return state.filter(b => b.id !== action.id);
    default:
      return state;
  }
};
