import { Link } from "react-router-dom";

import "./Navbar.css";
import logo from "../../assets/heal-health-logo-192.png";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="logo-container">
        <img className="logo-img" src={logo} alt="logo" />
        <p className="logo-text">Heal Health</p>
      </div>
      <div className="nav-link-wrapper">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/services">
          Services
        </Link>
        <Link className="nav-link" to="/ourteam">
          Team
        </Link>
        <Link className="nav-link" to="/join">
          Join us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
