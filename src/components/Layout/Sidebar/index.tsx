import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import RoofingIcon from "@mui/icons-material/Roofing";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import GlobalContext from "../../../context";

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
  const { t } = useTranslation();

//   const changeLanguage = (lang: string) => {
//     i18n.changeLanguage(lang); // Change language dynamically
//   };

  const navItems = [
    { title: "navigation.home", link: "/", icon: RoofingIcon },
    { title: "navigation.todoList", link: "/todo", icon: ChecklistRtlIcon },
    { title: "navigation.weather", link: "/weather", icon: CloudQueueIcon },
    { title: "navigation.profile", link: "/profile", icon: ManageAccountsIcon },
  ];

  return (
    <Drawer
      sx={{
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "100%",
          boxSizing: "border-box",
          position: "relative",
          minHeight: "90vh",
          zIndex: 5,
          paddingRight : 3
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
                <ListItemText
                  primary={t(item.title, { defaultValue: item.title })}
                />
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
