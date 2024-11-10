import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

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

const Navbar = ({ isUser = false }: { isUser: boolean }) => {
  if (!isUser) return <NonUserNavbar />;
  return <UserNavbar />;
};

export default Navbar;
