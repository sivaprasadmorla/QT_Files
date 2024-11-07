import { useState } from "react";
import B from "./B";
import firstContext from "./Context";
function A() {
  let [data, setData] = useState("siva");
  const handleClick = () => {
    setData("Hello Siva");
  };

  return(
  <>
    <h1>A Component</h1>
    <button onClick={handleClick}>send</button>
    <firstContext.Provider value={data}>
      <B />
    </firstContext.Provider>
  </>
  );
}
export default A;
