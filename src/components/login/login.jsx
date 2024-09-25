import { Link, Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, serPassword] = useState("");

  function handleClick() {}

  return (
    <div className="login">
      <Paper
        elevation={3}
        sx={{
          width: 300, // Set a width for the box
          mx: "auto", // Center horizontally
          mt: 10, // Add some margin to the top
          p: 3, // Padding inside the box
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            textAlign: "center",
            fontSize: 33,
            fontWeight: "normal",
            color: "#129900",
            position: "relative",
            display: "inline-block",
            transform: "translateX(-50%)",
            left: "50%",

            "&::after": {
              content: '""',
              display: "block",
              width: "100%",
              height: "2px",
              backgroundColor: "#129900",
              margin: "8px auto 0",
            },
          }}
        >
          Login
        </Typography>

        <TextField
          fullWidth
          label="Email"
          type="email"
          variant="outlined"
          margin="normal"
          required
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(email);
          }}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          required
          onChange={(e) => {
            serPassword(e.target.value);
            console.log(password);
          }}
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleClick}
          sx={{ mt: 2 }}
        >
          Login
        </Button>
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography variant="body2">
            <Link
              href="/signup"
              underline="hover" // No underline by default
            >
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Paper>
    </div>
  );
}
