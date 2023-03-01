import CartList from "./CartList";
import BillDetails from "./BillDetails";

const Cart = () => {
  return (
    <div className="container 2xl:px-8 px-2 mx-auto">
      <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
      <div className="cartListContainer">
        <CartList />
        <BillDetails />
      </div>
    </div>
  );
};

export default Cart;
