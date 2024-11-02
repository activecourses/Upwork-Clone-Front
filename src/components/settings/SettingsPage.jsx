import { Route, Routes } from "react-router-dom";
import SideNavigationBar from "./SettingsNavigationBar";

import { Container } from "@mui/material";

export const SettingsPage = () => {
  return (
    <>
      <SideNavigationBar />
      <Container sx={{
        marginLeft: '44%',
      }}>
        <Routes>
          <Route path="/contact-info" element={<h1>testing profile settings</h1>} />
          <Route path="/billing-payments" element={<h1>testing billing and payments</h1>} />
        </Routes>
      </Container>

    </>

  );
}
