import { useContext } from "react";
import firstContext from "./Context";

function E() {
  let contextData = useContext(firstContext);
  return (
    <>
    <h2>E Component</h2>
      <p>{contextData}</p>
    </>
  );
}

export default E;
