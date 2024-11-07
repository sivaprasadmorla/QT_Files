import React from 'react'
import productsData from '../../product/productData.js'

const Product = () => {
  return (
    <div>
      <table border={1}>
       {
     productsData.map((product)=>{
      return(
        <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            
            <td>{product.category}</td>
            <td><img src={product.image} height={100} width={100}/></td>
            
        </tr>
        
      )})}
        
      </table>
    </div>
  )
}

export default Product
