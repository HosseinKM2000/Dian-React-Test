// context/index.ts
import { createContext, Dispatch } from "react";
import { ActionType, ContextType } from "../types/context";

export const initialState: ContextType = {
  drawerStatus: window.screen.width > 900 ? true : false,
  user: {
    name: "",
    age: "",
    isDark: false,
    isPersian: false,
  },
};

const GlobalContext = createContext<{
  state: ContextType;
  dispatch: Dispatch<ActionType>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

export default GlobalContext;
