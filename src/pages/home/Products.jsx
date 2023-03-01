import { useSelector } from "react-redux";

import Empty from "../../components/Empty";
import Product from "./Product";

const Products = () => {
  const products = useSelector((state) => state.products);

  if (!products.length) return <Empty>No Product Found 👻</Empty>;

  return (
    <div className="productContainer" id="lws-productContainer">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
