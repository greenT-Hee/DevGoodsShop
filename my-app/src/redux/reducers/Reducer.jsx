import { ActionTypes } from "../constants/ActionTypes";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const detailProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.DETAIL_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const payedProductsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.PAYED_PRODUCT:
      return { ...state, products: payload };
    default:
      return state;
  }
};
