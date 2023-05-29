import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import logo from "../../assets/images/logo.png";
import { UserAuth } from "../../components/context/AuthContext";

export default function Header({activeLink}) {

  const { logout } = UserAuth();
  const navigate = useNavigate();

  const handelLogout = async () => {
    try {
      await logout();
      navigate("/signIn");
      alert("You are logged out");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    
      <div className="header">
        <div className="logorow">
        <img className="logoImage" src={logo} alt="TwoToLearn.Com"/> 
        <h2 className="htext">TwoToLearn.Com</h2>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/search">Search</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
            <li>
              <NavLink to="/signIn">LogIn</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink onClick={handelLogout}>Logout</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    
  );
}