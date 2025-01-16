import { useMutation } from "react-query";
import { getGeocodingData } from "../api";

export const useGeocoding = () => {
  return useMutation({ mutationFn: getGeocodingData });
};
