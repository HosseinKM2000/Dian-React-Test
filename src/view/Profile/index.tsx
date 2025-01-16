import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import LanguageButton from "../../components/Profile/LanguageButton";
import ThemeButton from "../../components/Profile/ThemeButton";
import GlobalContext from "../../context";
import { ProfileFormType } from "../../types";

const Profile = () => {
  const theme = useTheme();
  const { state, dispatch } = React.useContext(GlobalContext);

  const { register, handleSubmit, watch, setValue } =
    useForm<ProfileFormType>();

  // Handle form submission
  const onSubmit: SubmitHandler<ProfileFormType> = (data) => {
    dispatch({
      type: "CHANGE_USER",
      payload: { ...data, isDark: state.user.isDark },
    });
  };

  useEffect(() => {
    setValue("name", state.user.name);
    setValue("age", state.user.age);
  }, [state.user.age, state.user.name]);

  return (
    <Box
      width={"100%"}
      height={"auto"}
      display={"flex"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      bgcolor={theme.palette.background.default}
      color={theme.palette.text.primary}
      textAlign={"center"}
      padding={2}
      flexWrap={"wrap"}
      rowGap={5}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display={"flex"} flexDirection={"column"} rowGap={5}>
          <Typography variant="h6">
            In this page you can change your information .
          </Typography>
          <TextField
            id="name"
            label="name"
            variant="standard"
            {...register("name", { required: true })}
            sx={{ width: "100%" }}
          />
          <TextField
            id="age"
            label="age"
            type="number"
            variant="standard"
            {...register("age", { required: true })}
            sx={{ width: "100%" }}
          />
          <Box display={"flex"} justifyContent={"space-between"}>
            <ThemeButton register={register} defaultValue={state.user.isDark} />
            <LanguageButton
              register={register}
              defaultValue={state.user.isPersian}
            />
          </Box>
          <Button
            variant="contained"
            type="submit"
            sx={{ paddingX: "5rem" }}
            disabled={!watch("name") || !watch("age")}
          >
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Profile;
