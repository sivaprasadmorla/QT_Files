import axios from "axios";
import { Link } from "react-router-dom";
import "./Product.css";
import { useEffect, useState } from "react";
import addProductInCart from "../productDetails/PdService";
import ActionCreator from "../../action_creator/ActionCreator";
import store from "../../store/Store";
import { useSelector } from "react-redux";
const Product = ({ url, title ,name}) => {
  const [state, setState] = useState([[]]);
 var storedata= useSelector((store)=>{
    return store
  })

  useEffect(() => {
    if(storedata[name].length == 0){

      let response = axios.get(url);
      response
        .then((res) => {
          store.dispatch(ActionCreator(name,res.data));
    
        })
        .catch((error) => {
          console.log(error);
        });
    }
    
  })
  
  

  return (
    <>
      <h2
        style={{
          textAlign: "center",
          margin: "10px auto",
          color: "blueviolet",
        }}
      >
        {title}
      </h2>
      <p style={{ margin: "10px", textAlign: "justify", fontSize: "15px" }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit atque,
        voluptas veniam ipsam quia earum? Amet architecto quis sed nemo mollitia
        harum tempore quaerat non iure est, facilis iusto eligendi. Sapiente
        exercitationem autem itaque impedit dolores? Cum doloribus sunt veniam
        quae aut laborum? Voluptate facilis, expedita officiis cumque provident
        tempore officia? Repellendus, dignissimos expedita eum rem odit
        excepturi eos, facere provident et animi, nesciunt laboriosam tempore
        explicabo laudantium dolorum consequuntur deserunt possimus debitis
        velit tenetur nobis ipsam. Molestiae deleniti officiis perspiciatis
        accusantium, corrupti minus, esse labore ipsa ut dolores aliquid
        adipisci laudantium eos eius fugiat hic nostrum vero distinctio.
        Eveniet!
      </p>
      <div className="productContainer">
        {storedata[name].map((product) => {
          return (
            <div className="cardContainer" key={product.id}>
              <img src={product.image} alt="" />
              <h4>{product.title}</h4>
              <h4 id="price">${product.price}</h4>

              {/* <Link to="/productDetails">
            <button>Product Details</button>
            </Link> */}

              <Link to={`/productDetails/${product.id}`}>
                <button >Product Details</button>
              </Link>
             
                
              <button onClick={()=>addProductInCart(product)}>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
