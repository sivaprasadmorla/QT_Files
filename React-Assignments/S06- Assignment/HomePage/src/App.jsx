import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css"


import Navbar from './components/navbar/Navbar'
import Carousel from './components/carousel/Carousel'
import Fashion from './components/fashion/Fashion'
import Benefits from './components/benefits/Benefits'
import Categories from './components/categories/Categories'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
     <Navbar/>
     <Carousel/>
    <Fashion/>
    <Benefits/>
    <Categories/>

    </div>
  )
}

export default App
