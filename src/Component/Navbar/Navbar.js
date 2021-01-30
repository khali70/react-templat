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
              <Link to="/react-templat">Home</Link>
            </li>
            <li className="list-item">
              <Link to="/react-templat">Work</Link>
            </li>
            <li className="list-item">
              <Link to="/react-templat">Portfolio</Link>
            </li>
            <li className="list-item">
              <Link to="/react-templat">Resume</Link>
            </li>
            <li className="list-item">
              <Link to="/react-templat">About</Link>
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
