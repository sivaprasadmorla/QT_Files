import React, { useRef } from "react";
import axios from "axios";

const Login = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const handleSubmit = () => {
    let formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
    };
    console.log(formData)
    
        axios.post("http://localhost:6565",formData).then((res)=>{
          console.log("Data is posted successfully")
        }).catch((error)=>{
          console.log("failed to post the data")
        })
   
        
 
   
    
  };
  return (
    <div>
      <label htmlFor="username">Name :</label>
      <input type="text" ref={nameRef} /><br /><br />
      <label htmlFor="Email">Email</label>
      <input type="email" ref={emailRef} /><br /><br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
