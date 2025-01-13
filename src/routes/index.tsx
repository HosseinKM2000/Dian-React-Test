import { Route, Routes } from "react-router";
import App from "../App";
import GlobalContext, { initialState } from "../context";
import { useReducer } from "react";
import mainReducer from "../context/Reducer";
import Todo from "../view/Todo";
import Weather from "../view/Weather";

const Routing = () => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="todo" element={<Todo />} />
          <Route path="weather" element={<Weather />} />
          <Route path="profile" element={<Todo />} />
        </Route>
      </Routes>
    </GlobalContext.Provider>
  );
};

export default Routing;
