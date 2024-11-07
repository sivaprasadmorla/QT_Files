import { useState } from "react"
import "./Counter.css"

// function Counter(){ 
//     let count =0
//     function incFn(){
//         count+=1
                                                             // The Output of Count Can't be incremented so we use useState
//     }
//     return(
//         <div>
//         <h1>The Count is {count}</h1>
//         <button onClick={incFn}>IncButton</button>
//         </div>
// )
// }

// Here we can't modify the DOM elements

// function Counter(){ 
//     const [count,setCount] = useState(0)
//     function incFn(){
//         setCount(count+1)
//     }                                             
//     return(
//         <div className="container">
//         <h1>The Count is {count}</h1>
//         <button onClick={incFn}>IncButton</button>
//         </div>
// )
// }


// export default Counter

function Counter(){ 
    const [count,setCount] = useState(0)
    function incFn(){
        setCount(count+1)
        setCount(count+1)
        setCount(count+1)

    }                                             
    return(
        <div className="container">
        <h1>The Count is {count}</h1>
        <button onClick={incFn}>IncButton</button>
        </div>
)
}


export default Counter