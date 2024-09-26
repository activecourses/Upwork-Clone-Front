import { AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Logo = styled("img")({
  height: "50px", // Adjust the height as needed
  marginRight: "16px", // Space between logo and text
  cursor: "pointer",
});

const Header = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/");
  };
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", width: "100%", boxShadow: "none" }}
    >
      <Toolbar>
        <Logo
          src="/images/download.png"
          alt="Logo"
          sx={{ height: "28px" }}
          onClick={onClick}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
