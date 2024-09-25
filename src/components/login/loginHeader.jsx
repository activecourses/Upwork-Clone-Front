import { AppBar, Toolbar,  } from '@mui/material';
import { styled } from '@mui/system';


const Logo = styled('img')({
  height: '50px', // Adjust the height as needed
  marginRight: '16px', // Space between logo and text
});

const Header = () => {
  return (
    <AppBar position="static" sx={{backgroundColor : 'white', width : '100%', boxShadow: 'none' }} >
      <Toolbar>
        <Logo src="/images/download.png" alt="Logo" sx={{height : '28px'}} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;