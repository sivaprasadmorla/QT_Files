import {useContext, useState} from 'react'
import "./Login.css"
import authContext from './context'

const Login = () => {
  const logIn = useContext(authContext);
  const [username,setUsername]= useState("");
  const [password,setPassword] =  useState("")
  return (
    <div className='LoginContainer'>
    <div className='loginForm'>
      <h2>Log In</h2>
      <input type="text" placeholder='Enter Username'onChange={(e)=>{setUsername(e.target.value)}} /> <br />
      <input type="password" placeholder='Enter Password'onChange={(e)=>{setPassword(e.target.value)}} /><br />
      <a href="#">Forgot Password?</a><br />
      <button onClick={()=>{
        if(username === "Admin" && password === "Admin@123"){
          logIn(true)
        }
        else{
          alert("Please Enter Valid Credentials!!!")
        }
      }}>Submit</button>
    </div>
    </div>
  )
}

export default Login
