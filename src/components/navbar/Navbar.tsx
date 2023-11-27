import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import "./Navbar.css";
import logo from "../../assets/heal-health-logo-192.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onHandleMobileMenuClick = useCallback(() => {
    setIsMobileMenuOpen((previousState) => !previousState);
  }, []);

  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="site-navbar">
      <div className="container">
        <div className="logo">
          <img className="logo-img" src={logo} alt="Heal Health logo" />
          <p className="logo-text">Heal Health</p>
        </div>

        <button
          className={classNames("toggle-button")}
          onClick={onHandleMobileMenuClick}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav
          className={classNames("mobile-menu", { "is-open": isMobileMenuOpen })}
        >
          <ul className="mobile-menu-nav-links-container">
            <li className="mobile-menu-nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="mobile-menu-nav-link">
              <Link to="/about-us">About us</Link>
            </li>
            <li className="mobile-menu-nav-link">
              <Link to="/our-services">Services</Link>
            </li>
            <li className="mobile-menu-nav-link">
              <Link to="/our-team">Team</Link>
            </li>
            <li className="mobile-menu-nav-link">
              <Link to="/join-us-today">Join us</Link>
            </li>
          </ul>
        </nav>
        <nav className="main-menu">
          <ul className="main-nav-links-container">
            <li className="main-menu-nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="main-menu-nav-link">
              <Link to="/about-us">About us</Link>
            </li>
            <li className="main-menu-nav-link">
              <Link to="/our-services">Services</Link>
            </li>
            <li className="main-menu-nav-link">
              <Link to="/our-team">Team</Link>
            </li>
            <li className="main-menu-nav-link">
              <Link to="/join-us-today">Join us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
