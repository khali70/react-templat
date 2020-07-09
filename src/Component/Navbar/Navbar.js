import "./Navbar";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <h2 className="logo-text">Ultra Profile</h2>
          </div>
          <ul className="ul-list">
            <li className="list-item">
              <Link to="/">Home</Link>
            </li>
            <li className="list-item">
              <Link to="">Work</Link>
            </li>
            <li className="list-item">
              <Link to="">Portfolio</Link>
            </li>
            <li className="list-item">
              <Link to="">Resume</Link>
            </li>
            <li className="list-item">
              <Link to="">About</Link>
            </li>
            <li className="list-item">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
/*
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                contact
              </Link>

*/
export default Navbar;
