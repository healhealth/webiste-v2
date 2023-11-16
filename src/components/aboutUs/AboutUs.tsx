import React from "react";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import OurCoreValues from "../ourCoreValues/OurCoreValues";

import "./AboutUs.css";
const AboutUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        margin: "auto",
        gap: 4,
      }}
    >
      <Typography
        className="about-us-title"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          marginTop: 8,
          variant: "h2",
        }}
      >
        ABOUT US
      </Typography>
      <Typography sx={{ marginTop: 1 }}>
        We are mental health and digital experts who help mental health
        professionals, business or community leaders create solutions, tools,
        technologies and software to overcome their challenges, facilitate and
        accelerate their services aiming to improve mental health and wellbeing
        in the society.
      </Typography>
      <Typography>
        On the other hand we intend to contribute to open source and promoting
        every individual's mental health for free. Therefore we are planning to
        design and develop free, efficient and user-friendly self-help tools,
        everyone can benefit from.
      </Typography>

      <OurCoreValues />
    </Box>
  );
};

export default AboutUs;
