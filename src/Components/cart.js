import React, { useEffect, useState } from "react";

const Cart = ({ state, dispatch }) => {
  const { cart } = state;

  const [bill, setBill] = useState(0);

  useEffect(() => {
    setBill(
      cart.reduce((acc, currV, ind) => {
        return (acc = acc + currV.qty * currV.price);
      }, 0)
    );
  }, [cart]);

  const changeQuantity = (item, quantity) => {
    if (quantity === 0) {
      dispatch({ type: "Remove_Item", payload: item });
    }
    if (quantity > 0 && quantity < 11) {
      dispatch({
        type: "Change_quantity",
        payload: { ...item, qty: quantity },
      });
    }
  };

  return (
    <div
      style={{
        border: "1px solid grey",
        backgroundColor: "#f7f7f7",
        width: "25%",
        margin: 5,
        padding: 15,
      }}
    >
      {cart.length === 0 ? (
        <h3>Cart is Empty</h3>
      ) : (
        <div>
          <h2 style={{ marginTop: -2 }}>Cart Details</h2>

          {cart?.map((item, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  border: "0.1px solid grey",
                  margin: 10,
                  padding: 10,
                }}
              >
                <img
                  alt={item.category}
                  style={{
                    height: "100px",
                    objectFit: "cover",
                  }}
                  src={item.image}
                ></img>
                <div style={{ margin: 10, padding: 10 }}>
                  <div>{item.title}</div>
                  <div> ₹ {item.price}</div>
                  <div>
                    Quantity:
                    <button
                      style={{ margin: 10, padding: 5 }}
                      onClick={() => changeQuantity(item, item.qty - 1)}
                    >
                      {" "}
                      -{" "}
                    </button>
                    <b>{item.qty}</b>
                    <button
                      style={{ margin: 10, padding: 5 }}
                      onClick={() => changeQuantity(item, item.qty + 1)}
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <h3>
            <b>Total Bill : {bill}</b>
          </h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
