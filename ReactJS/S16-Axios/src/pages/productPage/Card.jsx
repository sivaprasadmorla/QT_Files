import React from "react";
import "./Card.css"
const Card = ({product}) => {
  return <div className="cardContainer">
    <img src={product.image} alt="" />
    <h4>{product.title}</h4>
    <h4>${product.price}</h4>
    <button>Product Details</button>
    <button>Add to Cart</button>
  </div>;
};

export default Card;
