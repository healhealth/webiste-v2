import React, { useRef } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import logo from "../../assets/heal-health-logo-192.png";
const Navbar = () => {
  const toggleButton = useRef<HTMLDivElement>(null);
  const mobileMenu = useRef<HTMLDivElement>(null);

  const handleOpenMobileMenu = () => {
    mobileMenu.current?.classList.toggle("active");
  };
  const handleCloseMobileMenu = () => {
    mobileMenu.current?.classList.toggle("active");
  };
  return (
    <div className="site-navbar">
      <div className="container">
        <div className="logo">
          <img className="logo-img" src={logo} alt="logo" />
          <p className="logo-text">Heal Health</p>
        </div>
        <div ref={toggleButton} onClick={handleOpenMobileMenu}>
          <a href="#" className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>
        </div>
        {/* Mobile menu */}
        <div className="mobile-menu" ref={mobileMenu}>
          <ul>
            <Link className="nav-link" to="/" onClick={handleCloseMobileMenu}>
              Home
            </Link>
            <Link
              className="nav-link"
              to="/about-us"
              onClick={handleCloseMobileMenu}
            >
              About us
            </Link>
            <Link
              className="nav-link"
              to="/our-services"
              onClick={handleCloseMobileMenu}
            >
              Services
            </Link>
            <Link
              className="nav-link"
              to="/our-team"
              onClick={handleCloseMobileMenu}
            >
              Team
            </Link>
            <Link
              className="nav-link"
              to="/join-us-today"
              onClick={handleCloseMobileMenu}
            >
              Join us
            </Link>
          </ul>
        </div>
        <div className="nav-links-container">
          <ul>
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about-us">
              About us
            </Link>
            <Link className="nav-link" to="/our-services">
              Services
            </Link>
            <Link className="nav-link" to="/our-team">
              Team
            </Link>
            <Link className="nav-link" to="/join-us-today">
              Join us
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
