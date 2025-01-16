export type ContextType = {
  drawerStatus: boolean;
  user: { name: string; age: string; isDark: boolean; isPersian: boolean };
};

export interface ChangeUserPayloadType {
  name?: string;
  age?: string;
  isDark?: boolean;
  isPersian?: boolean;
}

interface drawerHandler {
  type: "DRAWER_HANDLER";
}
interface themeSwitch {
  type: "THEME_SWITCH";
  payload: boolean;
}
interface changeUser {
  type: "CHANGE_USER";
  payload: ChangeUserPayloadType;
}

export type ActionType = drawerHandler | themeSwitch | changeUser;

export type mainReducerType = (
  state: ContextType,
  action: ActionType
) => ContextType;
