import { Container, Drawer, Typography } from "@mui/material";
import NavButton from './NavButton';
import { Outlet } from "react-router-dom";

// url for the settings component pages
const BILLING = '/settings/billing-payments';
const INFO = '/settings/contact-info';
const drawerWidth = 220;

const SideNavigationBar = () => {
  return (
    <>
      <aside>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, border: "none", boxSizing: "border-box", my: 11 },
          }}
        >
          <Typography variant="h2" sx={{ fontSize: "40px", marginLeft: "1.2rem" }}>Settings</Typography>
          <Container sx={{ display: 'flex', flexDirection: "column", alignItems: "flex-start" }}>
            <NavButton to={INFO}> Profile Settings</NavButton>
            <NavButton to={BILLING}> Billing and payments</NavButton>
            <Outlet />
          </Container>
        </Drawer>
      </aside >
    </>
  )
}


export default SideNavigationBar; 
