
import { useState } from 'react'
import './App.css'
import Nav from './component/Nav'
import Wrapper from './component/Wrapper'
import authContext from './component/context'
function App() {
  const[isLoggedIn,setIsLoggedIn] = useState(false)
  return (
    <>

      <authContext.Provider value={setIsLoggedIn}>
      {isLoggedIn && <Nav/>}
      <Wrapper isLoggedIn={isLoggedIn}/>
      </authContext.Provider>
    </>
  )
}

export default App
