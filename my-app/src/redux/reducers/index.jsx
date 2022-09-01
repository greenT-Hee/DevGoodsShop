import { combineReducers } from "redux";
import {
  productReducer,
  detailProductReducer,
  payedProductsReducer,
} from "./Reducer";

const reducers = combineReducers({
  allProducts: productReducer,
  detailProduct: detailProductReducer,
  payedProduct: payedProductsReducer,
});

export default reducers;
