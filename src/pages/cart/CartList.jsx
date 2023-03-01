import { useSelector } from "react-redux";

import Empty from "../../components/Empty";
import CartItem from "./CartItem";

const CartList = () => {
  const cart = useSelector((state) => state.cart);

  if (!cart.length) return <Empty>Cart Is Empty 🛒</Empty>;

  return (
    <div className="space-y-6">
      {cart.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default CartList;
