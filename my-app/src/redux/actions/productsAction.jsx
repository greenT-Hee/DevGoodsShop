import { ActionTypes } from "../constants/ActionTypes";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const detailProduct = (products) => {
  return {
    type: ActionTypes.DETAIL_PRODUCT,
    payload: products,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
  };
};
