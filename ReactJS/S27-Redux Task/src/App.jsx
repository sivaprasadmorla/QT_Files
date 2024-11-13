// import A from './component/contextAPI/A'
import { useState } from "react";
import "./App.css";
import Nav from "./component/Nav";
import Wrapper from "./component/Wrapper";
import authContext from "./component/context";
function App() {
  const[isLoggedIn,setIsLoggedIn] = useState(false)
  return (
    <div className="appContainer">
      <authContext.Provider value = {isLoggedIn}>
      {isLoggedIn && <Nav />}
      <Wrapper isLoggedIn={isLoggedIn}/>
      </authContext.Provider>
      
    </div>
  );
}

export default App;
