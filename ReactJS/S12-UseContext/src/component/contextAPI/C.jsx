import D from "./D";
import { useContext } from "react";
import firstContext from "./Context";
function C() {
    let d = useContext(firstContext)
  return (
    <>
    <h2>C Component</h2>
    <p>{d}</p>
      <D/>
    </>
  );
}

export default C;
