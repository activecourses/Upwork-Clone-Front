import { Link, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';

const NavButton = ({ to, children }) => {
  const location = useLocation();

  function isSelected(url) {
    return location.pathname === url;
  }
  return (
    <>
      <Button
        component={Link}
        to={to}
        sx={{
          fontSize: '12px',
          textDecoration: 'none',
          marginY: '12px',
          backgroundColor: 'transparent',
          color: isSelected(to) ? 'black' : 'lightgrey',
          fontWeight: 'bold',
          border: isSelected(to) ? '3px  solid lightgreen' : 'none',
          borderRight: 'none',
          borderTop: 'none',
          borderBottom: 'none',
          borderRadius: 0,
          '&:hover': {
            backgroundColor: 'transparent',
            color: 'black',
          },
        }}
      >
        {' '}
        {children}
      </Button>
    </>
  );
};
export default NavButton;
