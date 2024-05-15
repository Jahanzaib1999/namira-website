import { NavLink } from "react-router-dom";
import React, { useState } from "react";

//styles
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar container">
      <div className="navbar-content">
        <div className="navbar__left">
          <ul
            className={`navbar-nav`}
            style={menuOpen ? { display: `${menuOpen ? "flex" : "none"}` } : {}}
          >
            <li className="nav-item">
              <NavLink
                to="/services"
                activeclassname="active"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                activeclassname="active"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                activeclassname="active"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/branches"
                activeclassname="active"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                Branches
              </NavLink>
            </li>
          </ul>
          <div
            className={`hamburger-menu ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="hamburger-menu-bar top"></div>
            <div className="hamburger-menu-bar bottom"></div>
          </div>
        </div>
        <div className="navbar__middle">
          <NavLink
            to="/"
            className="navbar__logo"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            NAMIRA
          </NavLink>
        </div>
        <div className="navbar__right">
          <select className="navbar__language-select">
            <option value="en">English</option>
            <option value="ar">Arabic</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
