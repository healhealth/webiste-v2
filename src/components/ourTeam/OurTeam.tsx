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
        <h2 className="header">Our Team</h2>
        <ul className="team-list-container">
          <li className="team-member">
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={nashmil} alt="Nashmil's profile picture" />
            <p className="team-member-name">
              <strong>Nashmil Sepehriazad</strong>
            </p>
            <p className="team-member-role">Founder, Managing Director</p>
            <p className="team-member-description">
              Multi-passionate. Psychotherapist and personal development coach.
              Software engineer. Poet & writer. Children and nature-lover.
              Admirer of arts of all kinds. Advocate of equal, accessible and
              efficient mental healthcare for all.
            </p>
          </li>
          <li className="team-member">
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={bence} alt="Bence's profile picture" />
            <p className="team-member-name">
              <strong>Bence A. Tóth</strong>
            </p>
            <p className="team-member-role">Principal Software Engineer</p>
            <p className="team-member-description">
              Front-end developer, software architect, team lead, tech lead,
              mentor, teacher, tutor, volunteer, open source advocate,
              functional programming enthusiast, accessibility nerd, CSS ninja.
              Building software and relationships.
            </p>
          </li>
          <li className="team-member">
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={marcell} alt="Marcell's profile picture" />
            <p className="team-member-name">
              <strong> Marcell Ákos Tóth</strong>
            </p>
            <p className="team-member-role"> Graphics Designer</p>
            <p className="team-member-description">
              Creative and open-minded graphic designer. Enthusiastic about
              human rights. Experienced in education and special needs. Fan of
              modern art. Lover of literature and cinema. Amazed by 1960s
              culture.
            </p>
          </li>
          <li className="team-member">
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={qamar} alt="Qamar's profile picture" />
            <p className="team-member-name">
              <strong> Qamar Farooq</strong>
            </p>
            <p className="team-member-role"> Software Engineer</p>
            <p className="team-member-description">
              Determined and enthusiastic Fullstack Engineer. Problem-solver and
              quick learner. Flexible and experienced working with people across
              multiple geographies.
            </p>
          </li>
          <li className="team-member">
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={dejene} alt="Dejene's profile picture" />
            <p className="team-member-name">
              <strong> Dejene Daba</strong>
            </p>
            <p className="team-member-role">Frontend Developer</p>
            <p className="team-member-description">
              Passionate front-end developer with a desire to learn and grow in
              a collaborative team environment
            </p>
          </li>
          <li className="team-member">
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={behzad} alt="Behzad's profile picture" />
            <p className="team-member-name">
              <strong>Behzad Ebrahimi</strong>
            </p>
            <p className="team-member-role"> Software Engineer</p>
            <p className="team-member-description">
              Radiant Software Developer with aspirations for excellence and
              ambitions for a fruitful career. A machinist who redeems the
              noises of the workplace with the pursuit of music in the free
              time.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OurTeam;
