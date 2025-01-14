import { TimeInfo } from "../types/functions";

function getCurrentTimeInfo(): TimeInfo {
  const now = new Date();

  // Format the current time (HH:mm:ss)
  const currentTime = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  // Format the current date (YYYY-MM-DD)
  const currentDate = now.toISOString().split("T")[0];

  // Determine time of day based on hours
  const hour = now.getHours();
  let timeOfDay: "morning" | "noon" | "afternoon" | "evening" | "night";

  if (hour >= 5 && hour < 12) {
    timeOfDay = "morning";
  } else if (hour === 12) {
    timeOfDay = "noon";
  } else if (hour > 12 && hour < 17) {
    timeOfDay = "afternoon";
  } else if (hour >= 17 && hour < 21) {
    timeOfDay = "evening";
  } else {
    timeOfDay = "night";
  }

  return { currentTime, currentDate, timeOfDay };
}


export { getCurrentTimeInfo };

