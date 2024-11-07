import React from 'react'
import { useSelector } from 'react-redux'

const InputTakingComponent = () => {
    let reduxData = useSelector((storeData)=>{
        return storeData
    })
  return (
    <div>
      <h2>Store Data is : {reduxData}</h2>
    </div>
  )
}

export default InputTakingComponent
