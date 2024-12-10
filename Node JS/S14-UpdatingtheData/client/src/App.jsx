import "./App.css";
import {Route,Routes} from 'react-router-dom'
import Signup from "./component/signup/Signup";
import Login from "./component/login/Login";
import Home from "./component/home/Home";
import UpdateComp from "./component/update/UpdateComp";
function App() {
  return (
    <>
    <Routes>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/updateUser/:id" element = {<UpdateComp/>}></Route>
    </Routes>
      
    </>
  );
}

export default App;
