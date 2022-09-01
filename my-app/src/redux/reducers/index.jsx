import { combineReducers } from "redux";
import { productReducer, detailProductReducer } from "./Reducer";

const reducers = combineReducers({
  allProducts: productReducer,
  detailProduct: detailProductReducer,
});

export default reducers;
