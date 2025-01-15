import { Button, TextField, Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { useRef } from "react";
import Greeting from "../../components/Home/Greeting";
import Time from "../../components/Home/Time";

const Home = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const theme = useTheme();

  const saveName = () => {
    if (inputRef.current?.value && inputRef.current?.value?.length > 3) {
      localStorage.setItem(
        "user",
        JSON.stringify({ name: inputRef.current?.value })
      );
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
        <Typography variant="subtitle1">
          Please register your name for future visits .
        </Typography>
        <TextField
          id="name"
          label="Your Name"
          variant="standard"
          inputRef={inputRef}
          sx={{ width: "18rem" }}
        />
        <Button
          variant="contained"
          onClick={saveName}
          sx={{ paddingX: "5rem" }}
        >
          save
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
