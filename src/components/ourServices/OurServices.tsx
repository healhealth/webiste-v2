import { ReactComponent as MentalHealthProfessionals } from "../../assets/mental-health-professionals.svg";
import { ReactComponent as SelfHelp } from "../../assets/self-help.svg";
import { ReactComponent as Coaching } from "../../assets/coaching.svg";
import { Box, Typography } from "@mui/material";

import "./OurServices.css";
const OurServices = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        margin: "auto",
      }}
    >
      <Typography
        className="our-services-title"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          marginTop: 8,
          variant: "h2",
        }}
      >
        OUR SERVICES
      </Typography>
      <Box>
        <Box display="grid" gridTemplateColumns="1fr 200px" gap="40px">
          <Box marginTop={12}>
            <Typography sx={{ fontWeight: "bold" }}>
              Tools for mental health professionals
            </Typography>
            <Typography>
              We are building software and applications that help psychiatrists,
              psychologists, therapists and other professionals improve and
              accelerate their services resulting in more efficient and accurate
              outcomes and quality mental healthcare for their clients.
            </Typography>
          </Box>
          <Box marginTop={-6}>
            <Coaching />
          </Box>
        </Box>
        <Box display="grid" gridTemplateColumns="200px 1fr" gap={20}>
          <SelfHelp />
          <Box marginTop="80px">
            <Typography sx={{ fontWeight: "bold" }}>Self-help tools</Typography>
            <Typography>
              We are developing free efficient self-help tools for mental
              wellbeing which can be utilized by both individuals and prescribed
              by professionals to their clients. Individuals can use the tools
              to improve their mental wellbeing and manage their mental health
              symptoms. These tools can take many forms, including apps, videos,
              and websites. We are going to provide information, guidance, and
              techniques for managing stress, improving mood, and addressing
              specific mental health concerns.
            </Typography>
          </Box>
        </Box>
        <Box display="grid" gridTemplateColumns="1fr 1fr" gap={20}>
          <Box marginTop={15}>
            <Typography sx={{ fontWeight: "bold" }}>
              Personal Development Coaching
            </Typography>
            <Typography>
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
            </Typography>
          </Box>
          <MentalHealthProfessionals />
        </Box>
      </Box>
    </Box>
  );
};
export default OurServices;
