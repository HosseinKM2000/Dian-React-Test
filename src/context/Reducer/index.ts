import { mainReducerType } from "../../types/context";

const mainReducer: mainReducerType = (state, action) => {
  switch (action.type) {
    case "DRAWER_HANDLER":
      return { ...state, drawerStatus: !state.drawerStatus };
    case "THEME_SWITCH":
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};

export default mainReducer;
