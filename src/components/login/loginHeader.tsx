import { AppBar, Toolbar } from '@mui/material';
import { Container, styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navigation/Navbar';

const Logo = styled('img')({
  height: '50px', // Adjust the height as needed
  marginRight: '16px', // Space between logo and text
  cursor: 'pointer',
});

const Header = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/');
  };

  // Example condition: check if a user is logged in
  const isLoggedIn = true; // Set this dynamically based on user authentication status

  return (
    <Container>
      <AppBar
        position='static'
        sx={{
          backgroundColor: 'white',
          width: '100%',
          boxShadow: 'none',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Toolbar>
          <Logo
            src='/images/download.png'
            alt='Logo'
            sx={{ height: '28px' }}
            onClick={onClick}
          />
        </Toolbar>
        <Navbar isUser={isLoggedIn} /> {/* This will pass 'true' if logged in, 'false' otherwise */}
      </AppBar>
    </Container>
  );
};

export default Header;
