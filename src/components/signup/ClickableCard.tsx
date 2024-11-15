import { Box, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { ElementType, FC } from 'react';
interface ClickableCardProps {
  width: number;
  height: number;
  my: number;
  text: string;
  isHovered: boolean;
  isactive: boolean;
  onClick: () => void;
  Icon: ElementType;
}
const StyledCard = styled(Card)(({ isActive }: { isActive: boolean }) => ({
  border: isActive ? '2px solid green' : '2px solid lightGrey',
  borderRadius: '12px',
  transition: 'transform 0.2s ease, border 0.3s ease',
  animation: isActive ? 'scaleAnimation 0.2s forwards' : 'none',
  '@keyframes scaleAnimation': {
    '0%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(0.95)' },
    '100%': { transform: 'scale(1)' },
  },
}));

const ClickableCard: FC<ClickableCardProps> = ({
  width,
  height,
  my,
  text,
  isHovered,
  isactive,
  onClick,
  Icon,
  ...rest
}) => {
  return (
    <StyledCard
      isActive={isactive}
      onClick={onClick}
      sx={{
        width: width,
        height: height,
        my: my,
        cursor: 'pointer',
        '&:hover': {
          border: isHovered ? '2px solid green' : '2px solid lightGrey',
        },
      }}
      {...rest}
    >
      <Icon sx={{ p: 2 }} />
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        ></Box>
        <Typography variant='h4' sx={{ fontSize: '30px' }}>
          {text}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default ClickableCard;
