import { useContext, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLoginSubmit = () => {
    navigate("/home")
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
