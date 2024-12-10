import React, { useState } from 'react'

const ChangeDivColor = () => {
    const [color,setColor] = useState("yellow")

    const handleChangeColor = () =>{
        const colors =["red","green","blue","orange","purple"]
        const randomColor = colors[Math.floor(Math.random()*colors.length)]
        setColor(randomColor)
        // setColor("red")
    }
    
  return (
    <div className='h-[70vh] flex flex-col justify-center items-center'>
      <div className='w-[40%] h-[40vh]' style={{backgroundColor:color}}></div>
      <button className='bg-[purple] text-[white] mt-[15px] px-[10px] py-[3px] rounded-md' onClick={handleChangeColor}>ChangeColor</button>
    </div>
  )
}

export default ChangeDivColor
