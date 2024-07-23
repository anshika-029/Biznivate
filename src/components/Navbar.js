import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img
            width="180"
            height="50"
            src="https://biznivate.com/biznivate/assets/biznivate/biznivate.svg"
            alt="logo"
          />
        </div>
        <nav>
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {/* Proper Way to link routing in css ( avoid using anchor tags) */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/service">Services</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/blog">Blogs</Link>
            </li>
          </ul>
    
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li style={{ listStyle: "none" }}>
              <Link to="/contact">
                <button className="btn">Contact Us</button>
              </Link>
            </li>
          </ul>

          <button className="burger" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
