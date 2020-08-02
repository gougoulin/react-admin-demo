import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import OrderReducer from "./orderReducer";
import CurrentUserReducer from "./currentUserReducer";

export default combineReducers({
  user: UserReducer,
  currentUser: CurrentUserReducer,
  orders: OrderReducer,
});
