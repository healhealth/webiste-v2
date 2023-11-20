import React from "react";
import "./OurTeam.css";
import nashmil from "../../assets/nashmil.jpg";
import bence from "../../assets/bence-a-toth.jpg";
import marcell from "../../assets/marcell.jpg";
import qamar from "../../assets/qamar.jpg";
import dejene from "../../assets/dejene.jpg";
import behzad from "../../assets/behzad.jpg";
const OurTeam = () => {
  return (
    <div className="our-team">
      <div className="container-sm">
        <p className="header">Our Team</p>
        <div className="team-content-container">
          <div className="team-item">
            <img src={nashmil} alt="nashmil-photo" />
            <p className="team-name">
              <strong>Nashmil Sepehriazad</strong>
            </p>
            <p className="profession"> Founder, Managing Director</p>
            <p className="description">
              Multi-passionate. Psychotherapist and personal development coach.
              Software engineer. Poet & writer. Children and nature-lover.
              Admirer of arts of all kinds. Advocate of equal, accessible and
              efficient mental healthcare for all.
            </p>
          </div>
          <div className="team-item">
            <img src={bence} alt="bence-photo" />
            <p className="team-name">
              <strong>Bence A. Tóth</strong>
            </p>
            <p className="profession"> Principal Software Engineer</p>
            <p className="description">
              Front-end developer, software architect, team lead, tech lead,
              mentor, teacher, tutor, volunteer, open source advocate,
              functional programming enthusiast, accessibility nerd, CSS ninja.
              Building software and relationships.
            </p>
          </div>
          <div className="team-item">
            <img src={marcell} alt="marcel-photo" />
            <p className="team-name">
              <strong> Marcell Ákos Tóth</strong>
            </p>
            <p className="profession"> Graphics Designer</p>
            <p className="description">
              Creative and open-minded graphic designer. Enthusiastic about
              human rights. Experienced in education and special needs. Fan of
              modern art. Lover of literature and cinema. Amazed by 1960s
              culture.
            </p>
          </div>
          <div className="team-item">
            <img src={qamar} alt="qamar-photo" />
            <p className="team-name">
              <strong> Qamar Farooq</strong>
            </p>
            <p className="profession"> Software Engineer</p>
            <p className="description">
              Determined and enthusiastic Fullstack Engineer. Problem-solver and
              quick learner. Flexible and experienced working with people across
              multiple geographies.
            </p>
          </div>
          <div className="team-item">
            <img src={dejene} alt="dejene-photo" />
            <p className="team-name">
              <strong> Dejene Daba</strong>
            </p>
            <p className="profession">Frontend Developer</p>
            <p className="description">
              Passionate front-end developer with a desire to learn and grow in
              a collaborative team environment
            </p>
          </div>
          <div className="team-item">
            <img src={behzad} alt="behzad-photo" />
            <p className="team-name">
              <strong> Behzad Ebrahimi</strong>
            </p>
            <p className="profession"> Software Engineer</p>
            <p className="description">
              Radiant Software Developer with aspirations for excellence and
              ambitions for a fruitful career. A machinist who redeems the
              noises of the workplace with the pursuit of music in the free
              time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
