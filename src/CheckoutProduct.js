import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({
  image,
  id,
  productTitle,
  productDescription,
  productPrice,
}) {
  const [{ busket }, dispatch] = useStateValue();

  console.log(id);

  // WHEN CLICK ADD TO CART BUTON THE ACTION WILL BE
  const removeToBusket = (e) => {
    e.preventDefault();
    dispatch({
      type: "REMOVE_FROM_BUSKET",
      id: id,
    });
  };
  return (
    <>
      <div className="Product" id={id}>
        <div className="product_image">
          <img src={image} alt="Product Image" />
        </div>
        <div className="product_title">
          <h1>{productTitle}</h1>
        </div>
        <div className="product_price">
          <h2>{productPrice}</h2>
        </div>
        <div className="product_description">
          <p>{productDescription}</p>
        </div>
        <div className="add_to_cart">
          <button onClick={removeToBusket}>Remove from Cart</button>
        </div>
      </div>
    </>
  );
}

export default CheckoutProduct;
