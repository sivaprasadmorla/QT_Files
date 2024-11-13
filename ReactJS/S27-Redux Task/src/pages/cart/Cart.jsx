import React, { useEffect, useState } from "react";
import axios from "axios";
const Cart = () => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    getProductInfo();
  }, []);

  const deleteProductFromCart = (id) => {
    axios
      .delete(`http://localhost:3000/addToCart/${id}`)
      .then(() => {
        getProductInfo();
      })
      .catch((error) => {
        alert("Failed to reload the cart");
      });
  };

  const getProductInfo = () => {
    axios
      .get("http://localhost:3000/addToCart")
      .then((res) => {
        setCarts(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        alert("Failed to get the Cart data");
      });
  };

  return (
    <div>
      {carts.length > 0 && <h2>Cart Information</h2>}
      {carts.length > 0 ? (
        <div style={{ width: "700px" }}>
          <table cellSpacing={"20px"} width={"100%"}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((cartProduct) => {
                return (
                  <tr key={cartProduct.id}>
                    <td>
                      <img
                        src={cartProduct.image}
                        alt=""
                        width={75}
                        height={75}
                      />
                    </td>
                    <td>
                      <h4 style={{ fontSize: "12px" }}>{cartProduct.title}</h4>
                    </td>
                    <td>
                      <h4>$ {cartProduct.price}</h4>
                    </td>
                    <td
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "2px",
                        marginTop: "22px",
                      }}
                    >
                      <button>-</button>
                      <p>1</p>
                      <button>+</button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          deleteProductFromCart(cartProduct.id);
                        }}
                        style={{
                          backgroundColor: "red",
                          color: "white",
                          padding: "5px",
                          border: "none",
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <h2 style={{ color: "red", textAlign: "center", marginTop: "10px" }}>
            No Product Found
          </h2>
        </>
      )}
    </div>
  );
};

export default Cart;
