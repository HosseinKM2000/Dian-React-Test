import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useTranslation } from "react-i18next";
import GlobalContext from "../../../context";
import i18n from "../../../languages/configure";

function Navbar() {
  const { t } = useTranslation();
  const { state, dispatch } = React.useContext(GlobalContext);
  const handleDrawer = () => dispatch({ type: "DRAWER_HANDLER" });

  React.useEffect(() => {
    const userInfo = localStorage.getItem("user");
    if (userInfo) {
      const userData = JSON.parse(userInfo);
      dispatch({ type: "CHANGE_USER", payload: userData });
    }
  }, []);

  React.useEffect(() => {
    i18n.changeLanguage(state.user.isPersian ? "fa" : "en");
  }, [state.user.isPersian]);

  return (
    <AppBar
      position="relative"
      color="inherit"
      sx={{ minHeight: "10%", zIndex: 10, width: "100%" }}
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
                  {state.user.name ?? "-"}
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
                    {state.user.age ?? ""}
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
                    {state.user.age &&
                      state.user.age.length > 0 &&
                      t("home.years")}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "block" }}>
                <Tooltip title="Account">
                  <IconButton sx={{ p: 0 }}>
                    <Avatar
                      alt={state.user.name ? state.user.name : ""}
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
