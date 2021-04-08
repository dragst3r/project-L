import * as actionTypes from "./user.actions";

const initialState = {
  currentUser: null,
  isLoggedIn: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOG_IN_USER:
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.payload,
      };
    case actionTypes.LOG_OUT_USER:
      return {
        ...state,
        isLoggedIn: false,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default user;
