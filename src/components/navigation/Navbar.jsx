import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/** TODO:
 * Login button
 * signup button with primary color
 */
const StyledButton = styled(Button)({
  padding: '.5rem 1rem',
  fontWeight: 'normal',
  '& a': {
    textDecoration: 'none',
    color: 'inherit',
  },
});
const NonUserNavbar = () => {
  return (
    <nav>
      <StyledButton
        sx={{
          backgroundColor: 'white',
          color: 'black',
          marginRight: '1rem',
          '&:hover': {
            color: 'white',
          },
        }}
      >
        <Link to={'/login'}>Login</Link>
      </StyledButton>
      <StyledButton
        sx={{
          color: 'white',
        }}
      >
        <Link to={'/'}>Signup</Link>
      </StyledButton>
    </nav>
  );
};
const UserNavbar = () => {
  return <></>;
};

const Navbar = ({ isUser = false }) => {
  if (!isUser) return <NonUserNavbar />;
  return <UserNavbar />;
};
Navbar.propTypes = {
  isUser: PropTypes.bool,
};

export default Navbar;
