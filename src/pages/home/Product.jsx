import { useDispatch } from "react-redux";

import { addToCart } from "../../redux/cart/actions";
import { decrementStock } from "../../redux/products/actions";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const { id, name, image, category, price, quantity } = product;

  const addToCartHandler = () => {
    dispatch(addToCart(product));
    dispatch(decrementStock(id));
  };

  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={image} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{name}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price.toLocaleString()}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{quantity}</span>
          </p>
        </div>
        <button
          disabled={quantity < 1}
          onClick={addToCartHandler}
          className="lws-btnAddToCart"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
