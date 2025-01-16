import { Stack, styled, Switch, Typography } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { ProfileFormType } from "../../../types";

interface LanguageButtonProps {
  register: UseFormRegister<ProfileFormType>;
  defaultValue: boolean;
}

const LanguageButton: React.FC<LanguageButtonProps> = ({
  register,
  defaultValue,
}) => {
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "coral",
          ...theme.applyStyles("dark", {
            backgroundColor: "coral",
          }),
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: "violet",
      boxSizing: "border-box",
      ...theme.applyStyles("dark", {
        backgroundColor: "violet",
      }),
    },
  }));

  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
      <Typography>en</Typography>
      <AntSwitch
        defaultChecked={defaultValue}
        inputProps={{ "aria-label": "ant design" }}
        {...register("isPersian")}
      />
      <Typography>fa</Typography>
    </Stack>
  );
};

export default LanguageButton;
