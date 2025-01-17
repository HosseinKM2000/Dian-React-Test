import { Box, Theme, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ProfileFormType } from "../../../types";

const Greeting = ({ theme }: { theme: Theme }) => {
  const { t } = useTranslation();
  const user: ProfileFormType =
    localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")!);

  return (
    <>
      {" "}
      <Typography variant="h1" fontWeight={"bold"}>
        {t("home.hello_dear")}
      </Typography>
      <Box
        display={"flex"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          width={{ xs: "3rem", md: "10rem" }}
          sx={{
            height: "1px",
            backgroundColor: theme.palette.text.primary,
          }}
        ></Box>
        <Typography variant="h4" fontWeight={"400"} px={1}>
          {user && user.name}
        </Typography>
        <Box
          width={{ xs: "3rem", md: "10rem" }}
          sx={{
            height: "1px",
            backgroundColor: theme.palette.text.primary,
          }}
        ></Box>
      </Box>
    </>
  );
};

export default Greeting;
