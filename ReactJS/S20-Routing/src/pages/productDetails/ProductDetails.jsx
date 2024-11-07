import React, { useState } from 'react'
import "./ProductDetails.css"
import  {useParams} from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';

const ProductDetails = () => {
  let {id} =useParams();
 
  const [state,setState]=useState({
    id:0,
    title:"",
    description:"",
    image:"",
    price:0,
    rating:{
      rate:0,
      count:0
      
    },
    category:""
  })
  useEffect(()=>{
    let pdata = axios.get(`http://localhost:3000/products/${id}`)
    pdata.then((res)=>{
      setState(res.data)
    },[])
    .catch((error)=>{
      console.log(error);
      alert("Error while fetching the data")
    })
  },[])



  return (
    <div className='productDetail'>
      <div className="productDetailsContainer">
        <div className="left">
          <img src={state.image} alt="" width={"100%"} height={"340px"}/>
        </div>
        <div className="right">
          <h2>{state.title}</h2>
          <p>{state.description}</p>
          <h3>$ {state.price}</h3>
          <div className="btns">
          <button id="pdbtn1">Add to Cart</button>

          <button id='pdbtn2'>Back to Category</button>
        
          
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
