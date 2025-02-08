import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeLink = ({ isActive }) => (isActive ? "active-link" : "");
  return (
    <div className="navbarWrapper">
      <div className="container">
        <NavLink className={activeLink} to="/home">
          Home
        </NavLink>
        <NavLink className={activeLink} to="/about">
          About
        </NavLink>
        <NavLink className={activeLink} to="/contact">
          Contact
        </NavLink>
        <NavLink className={activeLink} to="/posts">
          Posts
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
