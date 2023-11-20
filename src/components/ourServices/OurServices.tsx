import React from "react";

import "./OurServices.css";
import MentalHealthProfessionals from "../../assets/mental-health-professionals.svg";
import SelfHelp from "../../assets/self-help.svg";
import Coaching from "../../assets/coaching.svg";

const OurServices = () => {
  return (
    <div className="our-services">
      <div className="container-sm">
        <p className="header">Our Services</p>
        <div className="service-item-header">
          <p>
            <strong> Tools for mental health professionals</strong>
          </p>
          <div className="services-item-container">
            <div>
              <p>
                We are building software and applications that help
                psychiatrists, psychologists, therapists and other professionals
                improve and accelerate their services resulting in more
                efficient and accurate outcomes and quality mental healthcare
                for their clients.
              </p>
            </div>

            <img src={Coaching} alt="coaching" />
          </div>
        </div>
        <div className="service-item-header">
          <p>
            <strong> Self-help tools</strong>
          </p>
          <div className="services-item-container">
            <img src={SelfHelp} alt="SelfHelp" />
            <p>
              We are developing free efficient self-help tools for mental
              wellbeing which can be utilized by both individuals and prescribed
              by professionals to their clients. Individuals can use the tools
              to improve their mental wellbeing and manage their mental health
              symptoms. These tools can take many forms, including apps, videos,
              and websites. We are going to provide information, guidance, and
              techniques for managing stress, improving mood, and addressing
              specific mental health concerns.
            </p>
          </div>
        </div>
        <div className="service-item-header">
          <p>
            <strong> Personal Development Coaching</strong>
          </p>
          <div className="services-item-container">
            <p>
              Our team of psychotherapists and personal development coaches
              collaborate with clients to identify, pursue, and achieve their
              goals using various techniques such as goal-setting, active
              listening, motivational interview, behavioral change, and many
              more. Our personal development coaching program is specifically
              designed to help clients enhance important aspects of personal
              growth, including self-awareness, confidence, communication,
              upskilling, and positive thinking. Clients can choose to hire a
              personal development coach for one-to-one sessions, or companies
              and organizations can work with our coaches to support their
              employees, managers, and leaders. Regardless of the approach, our
              coaches serve as strategic thinking partners and sounding boards,
              providing inspiration and accountability.
            </p>
            <img
              src={MentalHealthProfessionals}
              alt=" MentalHealthProfessionals "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
