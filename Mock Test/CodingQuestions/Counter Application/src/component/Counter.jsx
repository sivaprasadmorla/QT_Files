import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-[#deb887] h-[100vh] w-[100%] flex flex-col justify-center items-center">
      <h1 className="text-[2rem] mb-[30px]">Counter App</h1>
    <div className="bg-[white] w-[40%] h-[35vh] rounded-md">
      <h2 className="text-[50px]">{count}</h2>
      <button
      className="bg-[green] mr-[20px] px-[10px] py-[4px] rounded-md text-[25px]"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button onClick={()=>{setCount(0)}} className="bg-[yellow] mr-[20px] px-[10px] py-[4px] rounded-md text-[25px]">Reset</button>
      <button
        className="bg-[blue] mr-[20px] px-[10px] py-[4px] rounded-md text-[25px]"
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
          else{
            alert("Please enter Number greater than 0")
          }
        }}
      >
        Decrement
      </button>
    </div>
    </div>
  );
};

export default Counter;
