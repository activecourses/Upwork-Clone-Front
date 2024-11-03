import { Box, Container, Link, Typography } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import { GitHub } from '@mui/icons-material';
const Footer = () => {
  return (
    <Box
    py={4}
    bgcolor="black"
    color="white"
    textAlign="center"
    component="footer"
  >
    <Container maxWidth="md">
      <Typography variant="h6" component="div" gutterBottom>
        Connect with Us
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center" gap={4}>
        {/* TODO: Add link to about-us page */}
        <Link
          underline="hover"
          component={RouterLink}
          to="/"
          color="inherit"
        >
          About us
        </Link>
        <Link
          underline="hover"
          href="https://github.com/activecourses/Upwork-Clone-Front"
          color="inherit"
          
        >
          <GitHub />
        </Link>
      </Box>
      <Typography variant="body2" color="inherit" mt={2}>
        © {new Date().getFullYear()}{" "}
        <Link  href="https://github.com/activecourses">
          Active courses
        </Link>
        . All rights reserved.
      </Typography>
    </Container>
  </Box>
  )
}

export default Footer