import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import RoofingIcon from "@mui/icons-material/Roofing";
import { Avatar, Box, IconButton, Tooltip } from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { NavLink } from "react-router";
import GlobalContext from "../../../context";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
//   open?: boolean;
// }>(({ theme }) => ({
//   flexGrow: 1,
//   padding: theme.spacing(3),
//   transition: theme.transitions.create("margin", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   marginLeft: `-${drawerWidth}px`,
//   variants: [
//     {
//       props: ({ open }) => open,
//       style: {
//         transition: theme.transitions.create("margin", {
//           easing: theme.transitions.easing.easeOut,
//           duration: theme.transitions.duration.enteringScreen,
//         }),
//         marginLeft: 0,
//       },
//     },
//   ],
// }));

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })<AppBarProps>(({ theme }) => ({
//   transition: theme.transitions.create(["margin", "width"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   variants: [
//     {
//       props: ({ open }) => open,
//       style: {
//         width: `calc(100% - ${drawerWidth}px)`,
//         marginLeft: `${drawerWidth}px`,
//         transition: theme.transitions.create(["margin", "width"], {
//           easing: theme.transitions.easing.easeOut,
//           duration: theme.transitions.duration.enteringScreen,
//         }),
//       },
//     },
//   ],
// }));

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: "flex-end",
// }));

export default function Sidebar() {
  //   const theme = useTheme();
  const { state } = React.useContext(GlobalContext);
  const navItems = [
    { title: "Home", link: "/", icon: RoofingIcon },
    { title: "Todo List", link: "/todo", icon: ChecklistRtlIcon },
    { title: "Weather", link: "/weather", icon: CloudQueueIcon },
    { title: "Profile", link: "/profile", icon: ManageAccountsIcon },
  ];

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          position: "relative",
          minHeight: "90vh",
          zIndex: 5,
        },
      }}
      variant="persistent"
      anchor="left"
      open={state.drawerStatus}
    >
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <NavLink
                to={item.link}
                style={({ isActive }) => ({
                  color: isActive ? "aqua" : "inherit",
                  textDecoration: "none",
                })}
              >
                <ListItemText primary={item.title} />
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box
        position={"absolute"}
        bottom={0}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
        sx={{ display: { xs: "flex", md: "none" } }}
        pb={1}
      >
        <Tooltip title="Account" sx={{ ml: 1 }}>
          <IconButton>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Log out" sx={{ mr: 3 }}>
          <LogoutIcon />
        </Tooltip>
      </Box>
    </Drawer>
  );
}
