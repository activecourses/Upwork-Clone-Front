import { Box } from "@mui/system";
import { useState } from "react";
import { Link, TextField, Typography, Button } from "@mui/material";
import { grey, green } from "@mui/material/colors";

const SignupForm = () => {
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted: ", formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  // input validation function
  const validateUsername = (username) => {
    const usernameRegex = /^(?![0-9])\S+$/;
    return usernameRegex.test(username);
  };

  const validate = () => {
    let totalErrors = {};
    if (!formData.username) {
      totalErrors.username = "Username is Required !!";
    } else if (!validateUsername(formData.username)) {
      totalErrors.username =
        "Username must not start wit a number and cannot contain spaces.";
    }
    if (!formData.email) {
      totalErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      totalErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      totalErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      totalErrors.password = "Password must be at least 6 characters";
    }
    setErrors(totalErrors);
    return Object.keys(totalErrors).length === 0;
  };

  //form Structure
  return (
    <Box
      className="form-container"
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 400,
        mx: "auto",
        my: 10,
        justifyContent: "center",
        p: 2,
        border: "1px solid",
        borderRadius: "8px",
        borderColor: grey[300],
        boxShadow: "0px 10px 14px rgba(0,0,0,0.2)",
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          textAlign: "center",
          fontSize: 33,
          fontWeight: "normal",
          color: green[700],
          position: "relative",
          display: "inline-block",
          "&::after": {
            content: '""',
            display: "block",
            width: "20%",
            height: "2px",
            backgroundColor: green[700],
            margin: "8px auto 0",
          },
        }}
      >
        Sign Up
      </Typography>

      <TextField
        name="username"
        label="Username"
        type="text"
        value={formData.username}
        onChange={handleChange}
        margin="normal"
        error={!!errors.username}
        helperText={errors.username || "eg. Zeyad_H"}
        required
      />

      <TextField
        name="email"
        label="Email"
        type="text"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
        error={!!errors.email}
        helperText={errors.email || "eg: zeyad@example.com"}
        required
      />
      <TextField
        name="password"
        label="Password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={!!errors.password}
        margin="normal"
        helperText={errors.password || "password must be atleast 6 characters"}
        required
      />

      <Button
        type="submit"
        variant="contained"
        sx={{
          mt: 2,
        }}
      >
        Create my account
      </Button>

      <Link
        href={"/login"}
        variant="body2"
        underline="hover"
        sx={{ m: 2, fontSize: 15 }}
      >
        Already have an account?
      </Link>
    </Box>
  );
};

export default SignupForm;
