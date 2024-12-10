import React from "react";

const Timer = () => {
  let timerElement = document.getElementById("timer");
  let time = 10;
  let countDown;
  const handleStart = () => {
    clearInterval(countDown)
    countDown = setInterval(()=>{
        time--;
        if (time<=0){
            clearInterval(countDown)
            alert("Your time is up")
            handleReset()
        }
        else if(time<10){
            timerElement.textContent =`0${time}`
        }
        else{
            timerElement.textContent = time;
        }
    },1000)
  };
  const handleReset = () => {
    clearInterval(countDown)
    time = 10;
    timerElement.textContent = time;
  };

  return (
    <div className="bg-[#00ff9d] h-[100vh] w-[100%] flex justify-center items-center">
      <div className="bg-[white] h-[40vh] w-[30%] rounded-md flex flex-col items-center justify-center ">
        <h2 className="text-[40px]">
          00:<span id="timer">10</span>
        </h2>
        <div className="  w-[45%] flex justify-between m-[10px]">
          <button
            className="bg-[blue] py-[3px] px-[10px] rounded-md text-[white]"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="bg-[green] py-[3px] px-[10px] rounded-md text-[white]"
            onClick={handleStart}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
