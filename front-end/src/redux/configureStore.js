import { combineReducers, createStore } from "redux";
import formReducer from "./ducks/form";

const reducer = combineReducers({ form: formReducer });

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
