import BedtimeIcon from "@mui/icons-material/Bedtime";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ToggleButton from "@mui/material/ToggleButton";
import React from "react";
import { UseFormRegister } from "react-hook-form";
import { ProfileFormType } from "../../../types";
import { ActionType, ContextType } from "../../../types/context";

interface ThemeButtonProps {
  state: ContextType;
  dispatch: React.Dispatch<ActionType>;
  defaultValue: boolean;
  register: UseFormRegister<ProfileFormType>;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({
  state,
  dispatch,
  register,
  defaultValue,
}) => {
  return (
    <ToggleButton
      value={state.user.isDark}
      defaultChecked={defaultValue}
      {...register("isDark")}
      onClick={() => {
        dispatch({ type: "THEME_SWITCH", payload: !state.user.isDark });
      }}
    >
      {defaultValue ? <BedtimeIcon /> : <WbSunnyIcon />}
    </ToggleButton>
  );
};

export default ThemeButton;
