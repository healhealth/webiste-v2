import React from "react";

import "./Footbar.css";
import logo from "../../assets/heal-health-logo-192.png";

const Footbar = () => {
  return (
    <div className="site-footbar">
      <div className="container">
        <div className="footbar-left">
          <img src={logo} alt="logo" />
          <address>
            <strong>Heal Health Apps</strong>
            <br />
            Muldager 56, Brønshøj
            <br />
            Copenhagen 2700
            <br />
            CVR number:43883372
          </address>
        </div>
        <div className="footbar-right">
          <a
            href="https://www.facebook.com/healhealthdk"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link-icon"
          >
            <i className="fab fa-2x fa-facebook-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/healhealth/"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link-icon"
          >
            <i className="fab fa-2x fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footbar;
