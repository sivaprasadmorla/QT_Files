import axios from "axios";
import "./Product.css";
import { useState } from "react";
const Product = ({url,title}) => {
  const [state, setState] = useState([[]]);
  let response = axios.get(url);
  response
    .then((res) => {
      setState(res.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
    <h2 style={{textAlign:"center", margin:"10px auto", color:"blueviolet"}}>{title}</h2>
    <div className="productContainer">
      
      {state.map((product) => {
        return (
          <div className="cardContainer">
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h4 id="price">${product.price}</h4>
            <button>Product Details</button>
            <button>Add to Cart</button>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Product;
