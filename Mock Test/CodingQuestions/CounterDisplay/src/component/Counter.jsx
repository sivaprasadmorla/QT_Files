import React, { useState } from "react";

const Counter = ({ count, setCount }) => {
  const [color, setColor] = useState("yellow");

  const updateColor=(count)=>{
    if(count>0){
      setColor("green")
    }
    else if(count < 0){
      setColor('red')
    }
    else{
      setColor('yellow')
    }
  }

  const handleIncrement = ()=>{
    const newCount = count+1
    setCount(newCount)
    updateColor(newCount)
  }

  const handleDecrement = ()=>{
    const newCount = count-1
    setCount(newCount)
    updateColor(newCount)
  }

  const handleReset = ()=>{
    const newCount = 0
    setCount(newCount)
    updateColor(newCount)
  }




  return (
    <div className="bg-[#deb887] h-[100vh] w-[100%] flex flex-col justify-center items-center">
      <div className="bg-[white] w-[40%] h-[35vh] rounded-md">
        <h2 className="text-[50px]" style={{ color: color }}>
          {count}
        </h2>
        <button
          className="bg-[green] mr-[20px] px-[10px] py-[4px] rounded-md text-[25px]"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          onClick={handleReset}
          className="bg-[yellow] mr-[20px] px-[10px] py-[4px] rounded-md text-[25px]"
        >
          Reset
        </button>
        <button
          className="bg-[blue] mr-[20px] px-[10px] py-[4px] rounded-md text-[25px]"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
