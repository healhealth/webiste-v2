import { Box, Button, Typography } from "@mui/material";
import React from "react";

import "./JoinUs.css";

const JoinUs = () => {
  return (
    <Box>
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
          className="join-us-title"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            marginTop: 8,
          }}
        >
          JOIN US
        </Typography>
        <Typography sx={{ marginTop: 2 }}>
          Are you passionate about mental health and technology? Are you looking
          for an opportunity to gain experience and make a difference in the
          field? We are excited to announce that Heal Health is currently
          seeking new members to join our team on a voluntary or unpaid
          internship basis.
        </Typography>
        <Typography>
          As a startup, we are dedicated to creating innovative and effective
          mental health technology to support those in need. We are a small team
          of dedicated individuals, but we are looking to grow and expand our
          capabilities. We are looking for volunteers and interns who are eager
          to learn and contribute their skills in areas such as product
          development, marketing, research, sales, finances and more.
        </Typography>
        <Typography>
          We value diversity and welcome applicants with a wide range of
          backgrounds and experiences. If you’re interested in joining our team
          and making a meaningful impact in the field of mental health, please
          get in touch with us at&nbsp;
          <a href="mailto:info@healhealth.dk">info@healhealth.dk</a>.We look
          forward to hearing from you and working together to make mental health
          care accessible to all.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{
              width: "20%",
              backgroundColor: "oklch(65.59% 0.118 181)",
              ":hover": { backgroundColor: "oklch(55.59% 0.118 181)" },
            }}
          >
            <a href="mailto:info@healhealth.dk" className="join-us-button">
              Join us today
            </a>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default JoinUs;
