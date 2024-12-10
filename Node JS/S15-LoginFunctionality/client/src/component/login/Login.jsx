import { useContext, useState } from "react";
import axios from "axios";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLoginSubmit = () => {
    axios
      .get(`http://localhost:7986/auth/login/${Username}/${password}`)
      .then((res) => {
        alert("working");
      })
      .catch((error) => {
        alert("error while sending the data");
      });
  };

  return (
    <div className="LoginContainer">
      <div className="loginForm">
        <h2>Log In</h2>
        <input
          type="text"
          placeholder="Enter Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <a href="#">Forgot Password?</a>
        <br />
        <button onClick={handleLoginSubmit}>Submit</button>
        <p>
          Don't You have Account?
          <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
