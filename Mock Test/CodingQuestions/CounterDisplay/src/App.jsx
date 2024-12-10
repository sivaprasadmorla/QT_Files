import Counter from './component/Counter'
import './App.css'
import { useState } from 'react'

function App() {
  
  const [count,setCount] = useState(0)
  return (
   <div>
   <Counter count={count} setCount={setCount}/>
   </div>
  )
}

export default App
