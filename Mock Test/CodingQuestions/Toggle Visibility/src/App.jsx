
import './App.css'
import Toggle from './component/Toggle'
import { useState } from 'react'

function App() {
  const [isVisible,setIsVisible] = useState(false)
  const handleToggle = ()=>{
    setIsVisible((prevState)=>!prevState)
  }

  return (
   <div>
   <button onClick={handleToggle} className='mt-[80px] bg-[#0000ff] px-[10px] py-[4px] rounded-md text-[#ffffff]'>{isVisible? "Hide Message":"Show Message"}</button><br />
   <Toggle message = "Hello I am Siva Prasad !!!" isVisible={isVisible}/>
   </div>
  )
}

export default App
