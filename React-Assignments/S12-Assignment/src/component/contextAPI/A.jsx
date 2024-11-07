import C from "./C"
import { createContext, useState } from "react"

export const mycontext = createContext();
const A = () => {
    const [data,setData]=useState(0);
    const [str,setStr] = useState("")

    const handleClick=()=>{
      setData(data+1)
      setStr("siva")
    }
  return (
    <div>
      <h2>A Component</h2>
      <p onClick={handleClick}>Hello</p>
      <mycontext.Provider value={{data,str}}>
      <C/>
      </mycontext.Provider>
    </div>
  
  )
}

export default A
