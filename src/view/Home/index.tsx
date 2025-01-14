import { Button, TextField, Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useEffect, useRef } from "react";
import { getCurrentTimeInfo } from "../../functions";
import { TimeInfo } from "../../types/functions";
import LightModeIcon from "@mui/icons-material/LightMode";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import BedtimeIcon from "@mui/icons-material/Bedtime";

const Home = () => {
  const [currentTimeInfo, setCurrentTimeInfo] = React.useState<TimeInfo>();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const theme = useTheme();

  useEffect(() => {
    const timeInfo = getCurrentTimeInfo();
    setCurrentTimeInfo(timeInfo);
  }, []);

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
      height={"auto"}
      flexGrow={1}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      bgcolor={theme.palette.background.default}
      color={theme.palette.text.primary}
      padding={2}
    >
      <Typography variant="h3">Hello Dear</Typography>
      <Typography variant="h4">
        good {currentTimeInfo?.timeOfDay}{" "}
        {currentTimeInfo?.timeOfDay === "morning" ||
        currentTimeInfo?.timeOfDay === "noon" ||
        currentTimeInfo?.timeOfDay === "afternoon" ? (
          <LightModeIcon />
        ) : currentTimeInfo?.timeOfDay === "evening" ? (
          <WbTwilightIcon />
        ) : (
          <BedtimeIcon />
        )}
      </Typography>
      <Typography variant="h4">{currentTimeInfo?.currentDate}</Typography>
      <Typography variant="h4">{currentTimeInfo?.currentTime}</Typography>
      <Typography variant="subtitle1">
        Please register your name for future visits
      </Typography>
      <TextField
        id="name"
        label="Your Name"
        variant="standard"
        inputRef={inputRef}
      />
      <Button variant="contained" onClick={saveName}>
        save
      </Button>
    </Box>
  );
};

export default Home;
