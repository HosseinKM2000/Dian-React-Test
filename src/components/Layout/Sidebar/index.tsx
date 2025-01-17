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

export default function Sidebar() {
  const { t } = useTranslation();
  const { state } = React.useContext(GlobalContext);

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
          paddingRight: 3,
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
