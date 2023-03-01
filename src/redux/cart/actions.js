import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
} from "./actionTypes";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: { ...item },
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: { id },
  };
};

export const incrementItem = (id) => {
  return {
    type: INCREMENT_ITEM,
    payload: { id },
  };
};

export const decrementItem = (id) => {
  return {
    type: DECREMENT_ITEM,
    payload: { id },
  };
};
