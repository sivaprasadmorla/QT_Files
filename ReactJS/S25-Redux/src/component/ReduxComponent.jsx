import { useRef } from "react";
import ActionCreator from "../../actionCreator/ActionCreator";
import store from "../../store/Store";

const ReduxComponent = () => {
  const inputRef = useRef(null);
  const getData = () => {
    let inputData = inputRef.current.value;
    // console.log(inputData);
    // ActionCreator(inputData);
    store.dispatch(ActionCreator(inputData));
    inputRef.current.value = "";
  };
  return (
    <div>
      <h2>Redux Component</h2>
      <input type="text" ref={inputRef} />
      <button onClick={getData}>submit</button>
    </div>
  );
};

export default ReduxComponent;
