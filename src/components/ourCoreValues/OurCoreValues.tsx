import { Box, List, ListItem, Paper, Typography } from "@mui/material";

const OurCoreValues = () => {
  return (
    <Box sx={{ marginTop: 1 }}>
      <Typography sx={{ fontWeight: "bold" }}>OUR CORE VALUES</Typography>

      <Typography sx={{ marginTop: 2 }}>
        The core values are the beliefs, philosophies, and principles which
        reflect the company culture and impact the employees’ experience, as
        well as the relationship with customers, partners, and shareholders.
      </Typography>
      <Box>
        <Typography sx={{ fontWeight: "bold" }}>
          Promoting Mental Wellbeing
        </Typography>
        <Typography>
          Many of our important values fall under this crucial category,
          reflecting our mission, by promoting:
        </Typography>
        <List sx={{ listStyleType: "disc" }}>
          <ListItem sx={{ display: "list-item" }}>
            Opportunity For Growth (Learning and Accomplishment)
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Mattering At Work (Dignity and Meaning)
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Work-Life Harmony (Autonomy and Flexibility)
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Connection and Community (Belonging and Social Support)
          </ListItem>
        </List>
        <Typography sx={{ fontWeight: "bold" }}>Mutual Respect</Typography>
        <Typography>
          Mutual respect is the bedrock of any healthy relationship and serves
          as a fundamental pillar of humane and ethical behavior. It entails
          deeply valuing an individual’s right to exist, be heard, and enjoy
          equal opportunities as others. Respect extends beyond overlooking or
          merely tolerating differences; instead, it encompasses the recognition
          of these differences, understanding their significance, and responding
          with genuine interest, politeness, and care.
        </Typography>
        <Typography sx={{ fontWeight: "bold", marginTop: "1.5em" }}>
          Social Justice
        </Typography>
        <Typography>
          We believe in fairness and equality in the distribution of mental
          health resources and services. This value is rooted in the idea that
          everyone should have access to the care they need regardless of their
          financial status or other factors.
        </Typography>
        <Typography sx={{ fontWeight: "bold", marginTop: "1.5em" }}>
          Diversity
        </Typography>
        <Typography>
          We are committed to upholding diversity and inclusiveness in our
          hiring and promotion processes, ensuring that every individual has
          equal access to opportunities and advancement within our company.
        </Typography>
      </Box>
    </Box>
  );
};

export default OurCoreValues;
