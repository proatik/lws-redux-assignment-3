import { useDispatch, useSelector } from "react-redux";

import {
  incrementItem,
  decrementItem,
  removeFromCart,
} from "../../redux/cart/actions";

import { incrementStock, decrementStock } from "../../redux/products/actions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const { id, name, category, image, price, quantity } = item;

  const calculatedPrice = price * quantity;

  const stock = products.find((product) => product.id === id).quantity;

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(id));
    dispatch(incrementStock(id, quantity));
  };

  const incrementItemHandler = () => {
    dispatch(incrementItem(id)); // increment quantity of this item in cart.
    dispatch(decrementStock(id)); // decrement quantity of the product.
  };

  const decrementItemHandler = () => {
    dispatch(decrementItem(id)); // decrement quantity of this itme in cart.
    dispatch(incrementStock(id)); // incremrnt quantity of the product.
  };

  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* cart image */}
        <img src={image} alt="product" className="lws-cartImage" />

        {/* cart item info */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{name}</h4>
          <p className="lws-cartCategory">{category}</p>
          <p>
            BDT <span className="lws-cartPrice">{price.toLocaleString()}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* amount buttons */}
        <div className="flex items-center space-x-4">
          <button
            disabled={stock < 1}
            onClick={incrementItemHandler}
            className="lws-incrementQuantity"
          >
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{quantity}</span>
          <button
            disabled={quantity < 2}
            onClick={decrementItemHandler}
            className="lws-decrementQuantity"
          >
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>

        {/* price */}
        <p className="text-lg font-bold">
          BDT{" "}
          <span className="lws-calculatedPrice">
            {calculatedPrice.toLocaleString()}
          </span>
        </p>
      </div>

      {/* delete button */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button className="lws-removeFromCart" onClick={removeFromCartHandler}>
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
