import BedtimeIcon from "@mui/icons-material/Bedtime";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ToggleButton from "@mui/material/ToggleButton";
import { ProfileFormType } from "../../../types";
import { UseFormRegister } from "react-hook-form";
import React from "react";
import GlobalContext from "../../../context";

interface ThemeButtonProps {
  register: UseFormRegister<ProfileFormType>;
  defaultValue: boolean;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({
  register,
  defaultValue,
}) => {
  const { state, dispatch } = React.useContext(GlobalContext);

  console.log(state.user);
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
