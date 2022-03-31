import { combineReducers } from "redux";
import Movies from "./reducer/moviesReducer";

const reducers = {
  Movies,
};
export const rootReducer = combineReducers(reducers);
