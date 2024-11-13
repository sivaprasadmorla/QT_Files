import Electronics from "../pages/electronics/Electronics";
import Jewelery from "../pages/jewelery/Jewelery";

const Reducer = (
  state = {
    JEWELERY: [],
    ELECTRONICS: [],
    MEN: [],
    WOMEN: [],
  },
  action
) => {
  if (action.type === "ELECTRONICS") {
    state = {
      ...state,
      ELECTRONICS: action.payload,
    };
  } else if (action.type === "JEWELERY") {
    state = {
      ...state,
      JEWELERY: action.payload,
    };
  } else if (action.type === "MEN") {
    state = {
      ...state,
      MEN: action.payload,
    };
  } else if (action.type === "WOMEN") {
    state = {
      ...state,
      WOMEN: action.payload,
    };
  }
  return state;
};
export default Reducer;
