import { ADD_PRODUCT, INCREMENT_STOCK, DECREMENT_STOCK } from "./actionTypes";

import initialState from "./initialState";

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      const newProduct = action.payload;
      const prevState = structuredClone(state);

      return [...prevState, newProduct];
    }

    case INCREMENT_STOCK: {
      const { id, count } = action.payload;
      const prevState = structuredClone(state);

      return prevState.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + count };
        } else return item;
      });
    }

    case DECREMENT_STOCK: {
      const { id } = action.payload;
      const prevState = structuredClone(state);

      return prevState.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else return item;
      });
    }

    default:
      return state;
  }
};

export default productReducer;
