import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({
  image,
  id,
  productTitle,
  productDescription,
  productPrice,
}) {
  const [{ busket }, dispatch] = useStateValue();

  // WHEN CLICK ADD TO CART BUTON THE ACTION WILL BE
  const addToBusket = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TO_BUSKET",
      item: {
        id: id,
        image: image,
        productTitle: productTitle,
        productDescription: productDescription,
        productPrice: productPrice,
      },
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
          <button onClick={addToBusket}>Add To Cart</button>
        </div>
      </div>
    </>
  );
}

export default Product;
