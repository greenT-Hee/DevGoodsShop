import { combineReducers } from "redux";
import { productReducer } from "./Reducer";

const reducers = combineReducers({
  allProducts: productReducer,
});

export default reducers;
