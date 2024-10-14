import { Button, Box, Container } from "@mui/material";
import ClickableCard from "./ClickableCard";
import { useState } from "react";
import { green } from "@mui/material/colors";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import WorkOutlineRoundedIcon from "@mui/icons-material/WorkOutlineRounded";
import { useNavigate } from "react-router-dom";


const SignupPage = () => {
  const [userType , setUserType] = useState("") ; 
  const [activeCard, setActiveCard] = useState(null);
  const navigate = useNavigate();
  const handleCardClick = (cardIndex) => {
    setActiveCard((prev) => (prev === cardIndex ? null : cardIndex));
  };
  const onSubmit = () => {
    const role = activeCard === 0 ? "freelancer"  : "client" ; 
    navigate(`/signup/${userType}` , {state: {role}});
  };

  return (
    <>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <ClickableCard
          width={255}
          height={220}
          my={20}
          text={"I'm a freelancer looking for work"}
          isHovered={activeCard === null || activeCard === 0}
          isActive={activeCard === 0}
          onClick={() => {
            handleCardClick(0);
            setUserType("freelancer");}}
          Icon={TerminalRoundedIcon}
        />
        <Box sx={{ width: "50px" }}></Box>
        <ClickableCard
          width={250}
          height={220}
          my={20}
          text={"I'm a client, hiring for a project"}
          isHovered={activeCard === null || activeCard === 1}
          isActive={activeCard === 1}
          onClick={() => {
            handleCardClick(1) ; 
          setUserType("client") ; }}
          Icon={WorkOutlineRoundedIcon}
        />
      </Container>

      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Button
          type="submit"
          onClick={onSubmit}
          variant="contained"
          sx={{
            background: green[900],
            textTransform: "uppercase",
            borderRadius: 17,
            "&:hover": {
              bgcolor: green[600],
            },
          }}
          disabled={activeCard === null}
        >
          {activeCard === 0
            ? "Apply as a Freelancer"
            : activeCard === 1
              ? "Join as a Client"
              : "Apply"}
        </Button>
      </Container>
    </>
  );
};

export default SignupPage;
