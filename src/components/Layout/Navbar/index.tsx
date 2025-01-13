import AdbIcon from "@mui/icons-material/Adb";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import MenuIcon from "@mui/icons-material/Menu";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import GlobalContext from "../../../context";

function Navbar() {
  const { state, dispatch } = React.useContext(GlobalContext);

  const handleDrawer = () => dispatch({ type: "DRAWER_HANDLER" });
  const themeSwitch = () => dispatch({ type: "THEME_SWITCH" });

  return (
    <AppBar
      position="relative"
      color="inherit"
      sx={{ minHeight: "10%", zIndex: 10 }}
    >
      <Container maxWidth="xl" sx={{ my: "auto" }}>
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawer}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Dian-React-Test
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 0, display: "flex" }}>
            <Box
              sx={{ display: "flex", alignItems: "center", columnGap: 2 }}
              mr={3}
            >
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    display: "flex",
                    fontFamily: "monospace",
                    fontWeight: 400,
                    letterSpacing: ".05rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Hossein-Kamari
                </Typography>
                <Box sx={{ display: "flex", columnGap: 0.8 }}>
                  <Typography
                    variant="body2"
                    noWrap
                    component="span"
                    sx={{
                      display: "flex",
                      fontFamily: "monospace",
                      fontWeight: 400,
                      letterSpacing: ".05rem",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    24
                  </Typography>
                  <Typography
                    variant="body2"
                    noWrap
                    component="span"
                    sx={{
                      display: "flex",
                      fontFamily: "monospace",
                      fontWeight: 400,
                      letterSpacing: ".05rem",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    years
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Tooltip title="Account">
                  <IconButton sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={themeSwitch}
              color="inherit"
            >
              {state.isDarkMode ? <WbSunnyIcon /> : <BedtimeIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
