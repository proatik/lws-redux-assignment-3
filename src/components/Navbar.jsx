import { useSelector } from "react-redux";

import logoImage from "../assets/images/logo.png";

const Navbar = ({ setPage }) => {
  const cart = useSelector((state) => state.cart);

  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="/">
          <img src={logoImage} alt="LWS" className="max-w-[140px]" />
        </a>

        <div className="flex gap-4">
          <a
            href="#home"
            className="navHome"
            id="lws-home"
            onClick={() => setPage("home")}
          >
            Home
          </a>
          <a
            href="#cart"
            className="navCart"
            id="lws-cart"
            onClick={() => setPage("cart")}
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{count}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
