import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./signup/SignupPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignupForm from "./signup/SignupForm";
import Login from "./login/login";

const theme = createTheme({
  typography: {
    fontFamily: "Rubik",
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
