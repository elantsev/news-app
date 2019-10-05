import { combineReducers } from "redux";
import { fetchTech } from "./fetchTech";
import { customSearch } from "./customSearch";

const rootReducer = combineReducers({
  fetchTech,
  customSearch
});

export default rootReducer;
