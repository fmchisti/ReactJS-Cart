import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";

function Checkout() {
  const [{ busket }] = useStateValue();

  return (
    <>
      <div className="header">
        <center>
          <h1>Your Order Item: {busket?.length} </h1>
        </center>
      </div>
      <div className="product_container">
        {busket.map((cartProduct) => (
          <CheckoutProduct
            id={cartProduct.id}
            image={cartProduct.image}
            productTitle={cartProduct.productTitle}
            productDescription={cartProduct.productDescription}
            productPrice={cartProduct.productPrice}
            key={Math.random()}
          />
        ))}
      </div>

      <div className="contin_shoping">
        <Link to="/">
          <center>
            <button>Continue Shopping</button>
          </center>
        </Link>
      </div>
    </>
  );
}

export default Checkout;
