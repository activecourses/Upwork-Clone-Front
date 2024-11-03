import { Box, Button, Container, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
const Hero = () => {
  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flex: "1",
        gap: "1rem",
        marginTop: "5rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          "@media (max-width: 1040px)": {
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          },
        }}
      >
        <Typography component="h1" variant="h2">
          Get it done with a freelancer
        </Typography>
        <Typography component="p">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </Typography>
        <Button
          sx={{
            width: "30%",
            color: "white",
            padding: ".5rem 1rem",
          }}
        >
          <RouterLink style={{ color: "white", textDecoration: "none" }} to="/">
            Get started
          </RouterLink>
        </Button>
      </Box>
      <Box
        sx={{
          "@media (max-width: 1040px)": {
            display: "none",
          },
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
          }}
          src="./images/hero-section-img.png"
        />
      </Box>
    </Container>
  );
};
export default Hero;
