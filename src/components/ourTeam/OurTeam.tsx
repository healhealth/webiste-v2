import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import "./OurTeam.css";
import nashmil from "../../assets/nashmil.jpg";
import bence from "../../assets/bence-a-toth.jpg";
import marcell from "../../assets/marcell.jpg";
import qamar from "../../assets/qamar.jpg";
import dejene from "../../assets/dejene.jpg";
import behzad from "../../assets/behzad.jpg";

const OurTeam = () => {
  return (
    <div className="team-wrapper">
      <Typography
        className="our-team-title"
        sx={{ textAlign: "center", fontWeight: "bold", marginTop: 8 }}
      >
        OUR TEAM
      </Typography>
      <div className="team-card-wrapper">
        <Card sx={{ maxWidth: 250 }}>
          <CardMedia sx={{ height: 280 }} image={nashmil} title="nashmil" />
          <CardContent>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "bold", lineHeight: "1.2" }}
            >
              Nashmil Sepehriazad
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
              Founder, Managing Director
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Multi-passionate. Psychotherapist and personal development coach.
              Software engineer. Poet & writer. Children and nature-lover.
              Admirer of arts of all kinds. Advocate of equal, accessible and
              efficient mental healthcare for all.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 250 }}>
          <CardMedia sx={{ height: 290 }} image={bence} title="Bence A." />
          <CardContent>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "bold", lineHeight: "1.2" }}
            >
              Bence A. Tóth
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
              Principal Software Engineer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Front-end developer, software architect, team lead, tech lead,
              mentor, teacher, tutor, volunteer, open source advocate,
              functional programming enthusiast, accessibility nerd, CSS ninja.
              Building software and relationships.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 250 }}>
          <CardMedia sx={{ height: 290 }} image={marcell} title="marcel" />
          <CardContent>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "bold", lineHeight: "1.2" }}
            >
              Marcell Ákos Tóth
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
              Graphics Designer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Creative and open-minded graphic designer. Enthusiastic about
              human rights. Experienced in education and special needs. Fan of
              modern art. Lover of literature and cinema. Amazed by 1960s
              culture.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 250 }}>
          <CardMedia sx={{ height: 290 }} image={qamar} title="qamar" />
          <CardContent>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "bold", lineHeight: "1.2" }}
            >
              Qamar Farooq
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
              Software Engineer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Determined and enthusiastic Fullstack Engineer. Problem-solver and
              quick learner. Flexible and experienced working with people across
              multiple geographies.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 250 }}>
          <CardMedia sx={{ height: 290 }} image={dejene} title="dejen" />
          <CardContent>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "bold", lineHeight: "1.2" }}
            >
              Dejene Daba
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
              Frontend Developer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Passionate front-end developer with a desire to learn and grow in
              a collaborative team environment
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 250 }}>
          <CardMedia sx={{ height: 290 }} image={behzad} title="behzad" />
          <CardContent>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "bold", lineHeight: "1.2" }}
            >
              Behzad Ebrahimi
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
              Software Engineer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Radiant Software Developer with aspirations for excellence and
              ambitions for a fruitful career. A machinist who redeems the
              noises of the workplace with the pursuit of music in the free
              time.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OurTeam;
