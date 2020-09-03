import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
const { createStore, combineReducers } = require("redux");

let reducersCombine = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
});

let store = createStore(reducersCombine);

export default store;
