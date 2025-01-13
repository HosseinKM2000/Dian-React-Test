// context/index.ts
import { createContext, Dispatch } from "react";
import { ContextType } from "../types/context";

export const initialState: ContextType = {
  initialState: true,
};

export interface InitialChanger {
  type: "INITIAL_CHANGE";
  payload: {
    status: boolean;
  };
}

export type ActionType = InitialChanger;

const GlobalContext = createContext<{
  state: ContextType;
  dispatch: Dispatch<ActionType>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

export default GlobalContext;
