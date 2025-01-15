import { Box, Theme, Typography } from "@mui/material";

const Greeting = ({ theme }: { theme: Theme }) => {
  return (
    <>
      {" "}
      <Typography variant="h1" fontWeight={"bold"}>
        Hello Dear
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
          Hossein Kamari
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
