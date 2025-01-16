import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Sidebar from "./components/Layout/Sidebar";
import { Box, ThemeProvider } from "@mui/material";
import { useContext } from "react";
import GlobalContext from "./context";
import { darkTheme, lightTheme } from "./theme";

function App() {
  const { state } = useContext(GlobalContext);
  return (
    <ThemeProvider theme={state.isDarkMode ? darkTheme : lightTheme}>
      <main>
        <Navbar />
        <Box display={"flex"} position={"relative"} height={"100%"}>
          <Sidebar />
          <Outlet />
        </Box>
      </main>
    </ThemeProvider>
  );
}

export default App;
