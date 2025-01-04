import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import React, { useContext } from "react";

function Navbar() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav>
      <h1>AptiCrack</h1>
      <ul>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        {!isLoggedIn && (
          <>
            <li>
              <NavLink 
                to="/admin/login" 
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/admin/signup" 
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Sign Up
              </NavLink>
            </li>
          </>
        )}
        {isLoggedIn && (
          <>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;