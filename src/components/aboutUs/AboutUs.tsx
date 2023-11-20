import React from "react";

import "./AboutUs.css";
import OurCoreValues from "../ourCoreValues/OurCoreValues";
const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container-sm">
        <p className="header">About Us</p>
        <p>
          We are mental health and digital experts who help mental health
          professionals, business or community leaders create solutions, tools,
          technologies and software to overcome their challenges, facilitate and
          accelerate their services aiming to improve mental health and
          wellbeing in the society.
        </p>
        <p>
          On the other hand we intend to contribute to open source and promoting
          every individual's mental health for free. Therefore we are planning
          to design and develop free, efficient and user-friendly self-help
          tools, everyone can benefit from.
        </p>
        <OurCoreValues />
      </div>
    </div>
  );
};

export default AboutUs;
