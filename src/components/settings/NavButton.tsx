import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavButtonProps {
  to: string;
  children: ReactNode;
}
const NavButton = ({ to, children }: NavButtonProps) => {
  const location = useLocation();

  function isSelected(url: string) {
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

NavButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavButton;
