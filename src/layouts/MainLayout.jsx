import { useState, Fragment } from "react";

import Navbar from "../components/Navbar";

import Cart from "../pages/cart/Cart";
import Products from "../pages/home/Home";

const Router = ({ page, children }) => {
  return children.find((child) => child.props.to === page);
};

const MainLayout = () => {
  const [page, setPage] = useState("home");

  return (
    <Fragment>
      <Navbar setPage={setPage} />
      <main className="py-16">
        <Router page={page}>
          <Cart to="cart" />
          <Products to="home" />
        </Router>
      </main>
    </Fragment>
  );
};

export default MainLayout;
