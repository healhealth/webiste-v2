import React from "react";

import logo from "../../assets/heal-health-logo-192.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footbar.css";

const Footbar = () => {
  return (
    <div className="footer">
      <div className="footer-logo-container">
        <img className="footer-logo-img" src={logo} alt="logo" />
        <div className="footer-text">
          <p className="footer-logo-text">Heal Health Aps</p>
          <p className="footer-logo-text">Muldager 56, Brønshøj,</p>
          <p className="footer-logo-text">Copenhagen 2700</p>
          <p className="footer-logo-text">CVR number: 43883372</p>
        </div>
      </div>
      <div className="footer-icons-container">
        <a
          href="https://www.facebook.com/healhealthdk"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-link"
        >
          <FacebookIcon sx={{ marginRight: "1em" }} />
        </a>
        <a
          href="https://www.linkedin.com/company/healhealth/"
          target="_blank"
          rel="noreferrer noopener"
          className="footer-link"
        >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
};

export default Footbar;
