import { Route, Routes } from "react-router";
import App from "../App";
import GlobalContext, { initialState } from "../context";
import { useReducer } from "react";
import mainReducer from "../context/Reducer";
import Todo from "../view/Todo";
import Weather from "../view/Weather";
import Home from "../view/Home";
import Profile from "../view/Profile";

const Routing = () => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="todo" element={<Todo />} />
          <Route path="weather" element={<Weather />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </GlobalContext.Provider>
  );
};

export default Routing;
