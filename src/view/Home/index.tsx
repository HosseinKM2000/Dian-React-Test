import { Button, TextField, Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useRef } from "react";
import Greeting from "../../components/Home/Greeting";
import Time from "../../components/Home/Time";
import { useTranslation } from "react-i18next";
import GlobalContext from "../../context";

const Home = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { state, dispatch } = React.useContext(GlobalContext);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const saveName = () => {
    if (inputRef.current?.value && inputRef.current?.value?.length > 3) {
      dispatch({
        type: "CHANGE_USER",
        payload: { name: inputRef.current.value },
      });
    }
  };

  return (
    <Box
      width={"100%"}
      height={"auto"}
      flexGrow={1}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      bgcolor={theme.palette.background.default}
      color={theme.palette.text.primary}
      textAlign={"center"}
      padding={2}
    >
      <Greeting theme={theme} />

      {/* show Time and Date */}
      <Time />

      {/* get user name */}
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        mt={8}
        width={"100%"}
        rowGap={2}
      >
        {state.user.name.length === 0 && (
          <>
            {" "}
            <Typography variant="subtitle1">{t("home.guid_text")}</Typography>
            <TextField
              id="name"
              label={t("home.your_name")}
              variant="standard"
              inputRef={inputRef}
              sx={{ width: "18rem" }}
            />
            <Button
              variant="contained"
              onClick={saveName}
              sx={{ paddingX: "5rem" }}
            >
              {t("home.save")}
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Home;
