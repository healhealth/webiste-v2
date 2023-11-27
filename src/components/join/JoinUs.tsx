import React from "react";

import "./JoinUs.css";
const JoinUs = () => {
  return (
    <div className="join-us">
      <div className="container-sm">
        <h2 className="header">Join Us Today</h2>
        <p>
          Are you passionate about mental health and technology? Are you looking
          for an opportunity to gain experience and make a difference in the
          field? We are excited to announce that Heal Health is currently
          seeking new members to join our team on a voluntary or unpaid
          internship basis.
        </p>
        <p>
          As a startup, we are dedicated to creating innovative and effective
          mental health technology to support those in need. We are a small team
          of dedicated individuals, but we are looking to grow and expand our
          capabilities. We are looking for volunteers and interns who are eager
          to learn and contribute their skills in areas such as product
          development, marketing, research, sales, finances and more.
        </p>
        <p className="join-us-link">
          We value diversity and welcome applicants with a wide range of
          backgrounds and experiences. If you’re interested in joining our team
          and making a meaningful impact in the field of mental health, please
          get in touch with us at&nbsp;
          <a href="mailto:info@healhealth.dk">info@healhealth.dk</a>.We look
          forward to hearing from you and working together to make mental health
          care accessible to all.
        </p>
        <div className="join-us-button">
          <a href="mailto:info@healhealth.dk">Join us today</a>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
