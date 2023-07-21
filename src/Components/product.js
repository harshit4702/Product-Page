import React from "react";

const product = ({ state, dispatch }) => {
  const { products, cart } = state;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "75%",
      }}
    >
      {products.map((product, index) => {
        return (
          <div
            style={{
              display: "flex",
              border: "1px solid grey",
              width: "25%",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 2,
              margin: 2,
              gap: 5,
            }}
            key={product.id}
          >
            <img
              alt={product.category}
              style={{
                height: "250px",
                objectFit: "cover",
              }}
              src={product.image}
            ></img>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>{product.title}</div>
              <div>
                <b> ₹ {product.price} Only </b>
              </div>
            </div>

            {!cart?.some((item, ind) => item.id === product.id) ? (
              <button
                style={{
                  backgroundColor: "green",
                  color: "white",
                  padding: 5,
                  borderRadius: 5,
                  border: 0,
                }}
                onClick={() => {
                  dispatch({
                    type: "Add_Item",
                    payload: { ...product, qty: 1 },
                  });
                }}
              >
                Add to CART
              </button>
            ) : (
              <button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  padding: 5,
                  borderRadius: 5,
                  border: 0,
                }}
                onClick={() => {
                  dispatch({ type: "Remove_Item", payload: product });
                }}
              >
                Remove from Cart
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default product;
