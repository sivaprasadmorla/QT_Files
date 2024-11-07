
import {useContext} from 'react'
import authContext from './context'
import "./Nav.css"
import { Link } from 'react-router-dom'
const Nav = () => {
  const logOut = useContext(authContext)
  return (
    <div className='navbar'>
      <div className='Logo'>
        <h3>LoGo</h3>
      </div>
      <div className='navlinks'>
        <Link to="/">Home</Link>
        <Link to="/electronics">Electronics</Link>
        <Link to="/jewelery">Jewelery</Link>
        <Link to="/men's clothing">Men</Link>
        <Link to="/women's clothing">Women</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/cart">Cart</Link>
        
        <button onClick={()=>{
          logOut(false)
        }}>Logout</button>
      </div>
    </div>
  )
}

export default Nav
