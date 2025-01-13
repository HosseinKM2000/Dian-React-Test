import { mainReducerType } from "../../types/context";

const mainReducer: mainReducerType = (state, action) => {
  switch (action.type) {
    case "DRAWER_HANDLER":
      return { ...state, drawerStatus: !state.drawerStatus };
    default:
      return state;
  }
};

export default mainReducer;
