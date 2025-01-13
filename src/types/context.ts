export type ContextType = {
  drawerStatus: boolean;
};

export interface drawerHandler {
  type: "DRAWER_HANDLER";
}

export type ActionType = drawerHandler;

export type mainReducerType = (
  state: ContextType,
  action: ActionType
) => ContextType;
