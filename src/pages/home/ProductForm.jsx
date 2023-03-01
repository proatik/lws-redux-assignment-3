import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { addProduct } from "../../redux/products/actions";

const formValues = {
  name: "",
  image: "",
  category: "",
  price: "",
  quantity: "",
};

const ProductForm = () => {
  const formRef = useRef(null);
  const dispatch = useDispatch();

  const [values, setValuse] = useState(formValues);

  const changeHandler = (event) => {
    const { name, value } = event.target;

    const updateValuse = {
      ...values,
      [name]: value,
    };

    setValuse(updateValuse);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    dispatch(addProduct(values));

    setValuse(formValues);
  };

  return (
    <div>
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          ref={formRef}
          id="lws-addProductForm"
          className="space-y-4 text-[#534F4F]"
          onSubmit={formSubmitHandler}
        >
          {/* product name */}
          <div className="space-y-2">
            <label htmlFor="name">Product Name</label>
            <input
              required
              type="text"
              name="name"
              id="lws-inputName"
              value={values.name}
              className="addProductInput"
              onChange={changeHandler}
            />
          </div>

          {/* product category */}
          <div className="space-y-2">
            <label htmlFor="category">Category</label>
            <input
              required
              type="text"
              name="category"
              id="lws-inputCategory"
              value={values.category}
              className="addProductInput"
              onChange={changeHandler}
            />
          </div>

          {/* product image url */}
          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              required
              type="text"
              name="image"
              id="lws-inputImage"
              value={values.image}
              className="addProductInput"
              onChange={changeHandler}
            />
          </div>

          {/* price & quantity container */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* price  */}
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                required
                min="1"
                name="price"
                type="number"
                id="lws-inputPrice"
                value={values.price}
                className="addProductInput"
                onChange={changeHandler}
              />
            </div>

            {/* quantity */}
            <div className="space-y-2">
              <label htmlFor="quantity">Quantity</label>
              <input
                required
                min="1"
                type="number"
                name="quantity"
                id="lws-inputQuantity"
                value={values.quantity}
                className="addProductInput"
                onChange={changeHandler}
              />
            </div>
          </div>

          {/* submit button */}
          <button type="submit" className="submit" id="lws-inputSubmit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
