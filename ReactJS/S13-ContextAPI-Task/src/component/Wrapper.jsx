import React from 'react'
import Login from './Login'
import Home from './Home'

const Wrapper = ({isLoggedIn}) => {
  return (
    <div>
     {
        isLoggedIn ? <Home/> :<Login/>
     }
    </div>
  )
}

export default Wrapper
