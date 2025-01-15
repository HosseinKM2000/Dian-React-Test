import BedtimeIcon from "@mui/icons-material/Bedtime";
import LightModeIcon from "@mui/icons-material/LightMode";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { getCurrentTimeInfo } from "../../../functions";
import { TimeInfoType } from "../../../types/functions";

const Time = () => {
  const [currentTimeInfo, setCurrentTimeInfo] = React.useState<TimeInfoType>();
  const iconStyle = { width: "5rem", height: "5rem", margin: "0.5rem 0" };

  useEffect(() => {
    const timeInfo = getCurrentTimeInfo();
    setCurrentTimeInfo(timeInfo);
  }, []);
  return (
    <>
      {" "}
      <Box>
        {" "}
        {currentTimeInfo?.timeOfDay === "morning" ||
        currentTimeInfo?.timeOfDay === "noon" ||
        currentTimeInfo?.timeOfDay === "afternoon" ? (
          <LightModeIcon sx={iconStyle} />
        ) : currentTimeInfo?.timeOfDay === "evening" ? (
          <WbTwilightIcon sx={iconStyle} />
        ) : (
          <BedtimeIcon sx={iconStyle} />
        )}
      </Box>
      <Typography variant="h3" fontWeight={600}>
        Good {currentTimeInfo?.timeOfDay}{" "}
      </Typography>
      <Typography variant="h5">
        {currentTimeInfo?.currentDate} {currentTimeInfo?.currentTime}
      </Typography>
    </>
  );
};

export default Time;
