import React, { useState, useEffect } from "react";
import { useStateValue } from "./StateProvider";
import "./App.css";
import Product from "./Product";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [productData, setproductData] = useState([]);
  const [{ busket }] = useStateValue();

  useEffect(() => {
    async function getProductFromServer() {
      const product = await fetch("https://fakestoreapi.com/products");
      const jsonProdunt = await product.json();
      setproductData(jsonProdunt);
    }
    getProductFromServer();
  }, []);

  return (
    <div className="App">
      <div className="header">
        <Link to="/checkout">
          <h1>Your Cart: {busket.length} </h1>
        </Link>
      </div>
      <div className="product_container">
        {productData.map((getProduct) => (
          <Product
            id={getProduct.id}
            image={getProduct.image}
            productTitle={getProduct.title}
            productDescription={getProduct.description}
            productPrice={getProduct.price}
            key={getProduct.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
