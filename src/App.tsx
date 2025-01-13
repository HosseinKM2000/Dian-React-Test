import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Sidebar from "./components/Layout/Sidebar";

function App() {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <Outlet />
    </main>
  );
}

export default App;
