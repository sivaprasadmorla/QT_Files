import React from "react";
import logo from "../../assets/logo.jpg"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="Nav">
      <div className="logo">
        <img src={logo} alt="" />
        <h3>E.Com</h3>
      </div>
      <div className="navLinks">
        <a href="#">Home</a>
        <a href="#">Electronics</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
      </div>
      <div className="navIcons">
        <a href="#">
          <i class="fa-solid fa-user"></i>
        </a>
        <a href="#">
          <i class="fa-regular fa-heart"></i>
        </a>
        <button id="btn">Log Out</button>
      </div>
    </div>
  );
};

export default Navbar;
