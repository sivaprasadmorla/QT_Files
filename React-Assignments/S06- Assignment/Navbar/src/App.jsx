import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Navbar.css'
import './Carousel.css'
import Navbar from './Navbar'
import Carousel from './Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Carousel/>
    
    </>
  )
}

export default App
