import { combineReducers } from "redux";
import user from './user/user.reducer';
import shoppingList from './shopping-list/shopping-list.reducer';

const rootReducer = combineReducers({user,shoppingList});

export default rootReducer