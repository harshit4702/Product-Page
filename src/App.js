// import "./App.css";
import axios from "axios";
import React, { useEffect, useReducer } from "react";
import Cart from "./Components/cart";
import Product from "./Components/product";
import { cartReducer } from "./reducers/cartReducer";

const initialState = {
  products: [],
  cart: [],
};

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    dispatch({ type: "Add_Products", payload: data });
  };

  console.log(state);
  return (
    <div style={{ display: "flex" }}>
      <Product state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
