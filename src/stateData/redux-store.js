import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
const { createStore, combineReducers } = require("redux");

let reducersCombine = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
});

let store = createStore(reducersCombine);

export default store;
