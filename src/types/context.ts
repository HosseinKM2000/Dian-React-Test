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

interface DrawerHandler {
  type: "DRAWER_HANDLER";
}
interface ThemeSwitch {
  type: "THEME_SWITCH";
  payload: boolean;
}
interface LanguageSwitch {
  type: "LANGUAGE_SWITCH";
  payload: boolean;
}
interface ChangeUser {
  type: "CHANGE_USER";
  payload: ChangeUserPayloadType;
}

export type ActionType =
  | DrawerHandler
  | ThemeSwitch
  | ChangeUser
  | LanguageSwitch;

export type MainReducerType = (
  state: ContextType,
  action: ActionType
) => ContextType;
