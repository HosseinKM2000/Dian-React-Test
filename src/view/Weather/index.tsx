import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useGeocoding } from "../../Hooks";
import { useTranslation } from "react-i18next";

type Inputs = {
  city: string;
};

const Weather = () => {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const {
    data,
    isLoading,
    isError,
    mutateAsync: getGeocodingMutate,
  } = useGeocoding();
  const { t } = useTranslation();
  // Update the URL when the form is submitted
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const url = `${process.env.OPEN_CAGE_URL}?q=${data.city}&key=${process.env.OPEN_CAGE_API_KEY}&no_annotations=1`;
    await getGeocodingMutate(url);
  };

  return (
    <Box
      width={"100%"}
      height={"100%"}
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
          <Typography variant="h6">{t("weather.guid_text")}</Typography>
          <TextField
            id="city"
            label= {t("weather.city")}
            variant="standard"
            {...register("city", { required: "City name is required" })}
            sx={{ width: "18rem" }}
            error={!!errors.city}
            helperText={errors.city?.message}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ paddingX: "5rem" }}
            disabled={!watch("city")}
          >
            {t("weather.search")}
          </Button>
        </Box>
      </form>

      {/* Render loading, error, or data */}
      {isError && (
        <Typography variant="body1">{t("weather.no_result")}</Typography>
      )}
      {isLoading && <Typography variant="body1">Loading...</Typography>}
      {data?.firstData && data?.secondData && (
        <Box display={"flex"} flexDirection={"column"} rowGap={3}>
          <Box display={"flex"} gap={2}>
            <Typography variant="h5" fontWeight={900}>
              {t("weather.temperature")}
            </Typography>
            <Typography variant="h6">
              {data?.secondData?.current_weather?.temperature ?? "N/A"}{" "}
              {data?.secondData?.current_weather_units?.temperature ?? ""}
            </Typography>
          </Box>
          <Box display={"flex"} gap={2}>
            <Typography variant="h5" fontWeight={900}>
              {t("weather.weather_code")}
            </Typography>
            <Typography variant="h6">
              {data?.secondData?.current_weather?.weathercode ?? "N/A"}{" "}
              {data?.secondData?.current_weather_units?.weathercode ?? ""}
            </Typography>
          </Box>
          <Box display={"flex"} gap={2}>
            <Typography variant="h5" fontWeight={900}>
              {t("weather.wind_direction")}
            </Typography>
            <Typography variant="h6">
              {data?.secondData?.current_weather?.winddirection ?? "N/A"}{" "}
              {data?.secondData?.current_weather_units?.winddirection ?? ""}
            </Typography>
          </Box>
          <Box display={"flex"} gap={2}>
            <Typography variant="h5" fontWeight={900}>
              {t("weather.wind_speed")}
            </Typography>
            <Typography variant="h6">
              {data?.secondData?.current_weather?.windspeed ?? "N/A"}{" "}
              {data?.secondData?.current_weather_units?.windspeed ?? ""}
            </Typography>
          </Box>
        </Box>
      )}
      {data?.firstData && data?.firstData.length === 0 && (
        <Typography variant="body1" color="warning">
          {t("weather.error")}
        </Typography>
      )}
    </Box>
  );
};

export default Weather;
