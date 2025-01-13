export type ContextType = {
  drawerStatus: boolean;
  isDarkMode: boolean;
};

interface drawerHandler {
  type: "DRAWER_HANDLER";
}
interface themeSwitch {
  type: "THEME_SWITCH";
}

export type ActionType = drawerHandler | themeSwitch;

export type mainReducerType = (
  state: ContextType,
  action: ActionType
) => ContextType;
