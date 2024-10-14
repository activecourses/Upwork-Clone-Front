/* eslint-disable react/prop-types */
import { Box, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)(({ isActive }) => ({
  border: isActive ? "2px solid green" : "2px solid lightGrey",
  borderRadius: "12px",
  transition: "transform 0.2s ease, border 0.3s ease",
  animation: isActive ? "scaleAnimation 0.2s forwards" : "none",
  "@keyframes scaleAnimation": {
    "0%": { transform: "scale(1)" },
    "50%": { transform: "scale(0.95)" },
    "100%": { transform: "scale(1)" },
  },
}));

const ClickableCard = ({
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
        cursor: "pointer",
        "&:hover": {
          border: isHovered ? "2px solid green" : "2px solid lightGrey",
        },
      }}
      {...rest}
    >
      <Icon sx={{ p: 2 }} />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        ></Box>
        <Typography variant="h4" sx={{ fontSize: "30px" }}>
          {text}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default ClickableCard;
