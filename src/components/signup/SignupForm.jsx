import { Box } from "@mui/system";
import { useState } from "react";
import {
  Link,
  Container,
  TextField,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { grey, green } from "@mui/material/colors";

const SignupForm = () => {
  const [errors, setErrors] = useState({});
  const { role } = location.state || {};

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted: ", formData);
      console.log(role);
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
  const validatename = (name) => {
    const nameRegex = /^[A-Za-z'-]+$/;
    return nameRegex.test(name);
  };

  const validate = () => {
    let totalErrors = {};

    if (!formData.lastname) {
      totalErrors.lastname = "last name is Required !!";
    } else if (!validatename(formData.lastname)) {
      totalErrors.lastname =
        "last name shouldn't contain any numbers , spaces or special characters!" ;
    }
    //--------------------------------------------------------------//

    if (!formData.firstname) {
      totalErrors.firstname = "firstname is Required !!";
    } else if (!validatename(formData.firstname)) {
      totalErrors.firstname =
        "first name shouldn't contain any numbers , spaces or special characters!" ;
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

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            name="firstname"
            label="first name"
            type="text"
            value={formData.firstname}
            onChange={handleChange}
            margin="normal"
            error={!!errors.firstname}
            helperText={errors.firstname || "eg. John"}
            sx={{ marginX: 1 }}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="lastname"
            label="Last name"
            type="text"
            value={formData.lastname}
            onChange={handleChange}
            margin="normal"
            error={!!errors.lastname}
            helperText={errors.lastname || "eg. Doe"}
            required
            fullWidth
          />
        </Grid>
      </Grid>

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
