import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const OurMissionAndVision = () => {
  return (
    <Box>
      <Typography
        sx={{ fontWeight: "bold", textAlign: "center", marginTop: "2em" }}
      >
        OUR VISION AND MISSION
      </Typography>
      <Box sx={{ width: "80%", margin: "0 auto" }}>
        <Typography sx={{ lineHeight: "3" }}>
          Mental wellbeing is for all of us.
        </Typography>
        <Typography mb={10}>
          Our mission is to utilize technology to improve mental health and
          wellbeing for everyone. We empower mental health professionals and
          leaders with innovative tools, training and resources, while making
          self-help accessible to all through our free and open source digital
          products.
        </Typography>
      </Box>
    </Box>
  );
};

export default OurMissionAndVision;
