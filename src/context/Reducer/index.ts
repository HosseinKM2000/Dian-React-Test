import { mainReducerType } from "../../types/context";

const mainReducer: mainReducerType = (state, action) => {
  switch (action.type) {
    case "DRAWER_HANDLER":
      return { ...state, drawerStatus: !state.drawerStatus };
    case "THEME_SWITCH":
      return { ...state, user: { ...state.user, isDark: action.payload } };
    case "CHANGE_USER": {
      localStorage.setItem(
        "user",
        JSON.stringify({ ...state.user, ...action.payload })
      );
      return { ...state, user: { ...state.user, ...action.payload } };
    }
    default:
      return state;
  }
};

export default mainReducer;
