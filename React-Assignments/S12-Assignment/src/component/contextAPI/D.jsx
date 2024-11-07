import { useContext } from "react"
import { mycontext } from "./A"

const D = () => {
    let {data,str}= useContext(mycontext)
  return (
    <div>
      <h2>D Component</h2>
      <p>{data}</p>
      <p>{str}</p>
    </div>
  )
}

export default D
