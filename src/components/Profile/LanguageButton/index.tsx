import { ToggleButton, Typography } from "@mui/material";
import React from "react";
import { UseFormRegister } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ProfileFormType } from "../../../types";
import { ActionType, ContextType } from "../../../types/context";

interface LanguageButtonProps {
  state: ContextType;
  dispatch: React.Dispatch<ActionType>;
  register: UseFormRegister<ProfileFormType>;
  defaultValue: boolean;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({
  state,
  dispatch,
  register,
  defaultValue,
}) => {
  const { t } = useTranslation();

  return (
    <ToggleButton
      value={state.user.isPersian}
      defaultChecked={defaultValue}
      {...register("isPersian")}
      onClick={() => {
        dispatch({ type: "LANGUAGE_SWITCH", payload: !state.user.isPersian });
      }}
    >
      {defaultValue ? (
        <Typography> {t("profile.fa")}</Typography>
      ) : (
        <Typography> {t("profile.en")}</Typography>
      )}
    </ToggleButton>
  );
};

export default LanguageButton;
