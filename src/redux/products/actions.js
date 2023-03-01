import { ADD_PRODUCT, INCREMENT_STOCK, DECREMENT_STOCK } from "./actionTypes";

const uniqueId = () => {
  return Date.now();
};

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: {
      ...product,
      id: uniqueId(),
      price: Number(product.price),
    },
  };
};

export const incrementStock = (id, count = 1) => {
  return {
    type: INCREMENT_STOCK,
    payload: {
      id,
      count,
    },
  };
};

export const decrementStock = (id) => {
  return {
    type: DECREMENT_STOCK,
    payload: { id },
  };
};
