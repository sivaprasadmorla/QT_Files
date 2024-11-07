import productsData from "../../product/productData"
import Card from "./card"
import "./Product.css"
const Product = () => {
  return (
    <div className="productContainer">
     {productsData.map((product)=>{
        return(
          <>
   
          <Card product={product}/>
          </>
          
        )
        
       
     })}
    </div>
  )
}

export default Product
