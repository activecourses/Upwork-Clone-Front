import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./components/signup/SignupPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignupForm from "./components/signup/SignupForm";
import ResetPasswordRequest from "./components/resetpassword/ResetPasswordRequest";
import ResetPasswordConfirm from "./components/resetpassword/ResetPasswordConfirm";
import PasswordSent from "./components/resetpassword/PasswordSent";

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
          <Route
            path="/reset-password/:token"
            element={<ResetPasswordConfirm />}
          />
          <Route path="/reset-password" element={<ResetPasswordRequest />} />
          <Route path="/password-sent" element={<PasswordSent />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
