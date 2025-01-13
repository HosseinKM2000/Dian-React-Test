// context/index.ts
import { createContext, Dispatch } from "react";
import { ActionType, ContextType } from "../types/context";

export const initialState: ContextType = {
  drawerStatus: true,
  isDarkMode: true,
};

const GlobalContext = createContext<{
  state: ContextType;
  dispatch: Dispatch<ActionType>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

export default GlobalContext;
