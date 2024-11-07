
import {useContext} from 'react'
import authContext from './context'
import "./Nav.css"
const Nav = () => {
  const logOut = useContext(authContext)
  return (
    <div className='navbar'>
      <div className='Logo'>
        <h3>LoGo</h3>
      </div>
      <div className='navlinks'>
        <a href="#">Home</a>
        <a href="#">Profile</a>
        <button onClick={()=>{
          logOut(false)
        }}>Logout</button>
      </div>
    </div>
  )
}

export default Nav
