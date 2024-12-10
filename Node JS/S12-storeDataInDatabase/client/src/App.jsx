import "./App.css";
import {Route,Routes} from 'react-router-dom'
import Signup from "./component/Signup";
import Login from "./component/login/Login";
function App() {
  return (
    <>
    <Routes>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/" element={<Login/>}></Route>
    </Routes>
      
    </>
  );
}

export default App;
