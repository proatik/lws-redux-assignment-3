import {
  ADD_TO_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  REMOVE_FROM_CART,
} from "./actionTypes";

import initialState from "./initialState";

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const newItem = action.payload;
      const prevState = structuredClone(state);

      const itemInCart = prevState.find((item) => item.id === newItem.id);

      if (itemInCart) {
        return prevState.map((item) => {
          if (item.id === newItem.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else return item;
        });
      } else return [...prevState, { ...newItem, quantity: 1 }];
    }

    case INCREMENT_ITEM: {
      const { id } = action.payload;
      const prevState = structuredClone(state);

      return prevState.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else return item;
      });
    }

    case DECREMENT_ITEM: {
      const { id } = action.payload;
      const prevState = structuredClone(state);

      return prevState.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else return item;
      });
    }

    case REMOVE_FROM_CART: {
      const { id } = action.payload;
      const prevState = structuredClone(state);

      return prevState.filter((item) => item.id !== id);
    }
    default:
      return state;
  }
};

export default cartReducer;
