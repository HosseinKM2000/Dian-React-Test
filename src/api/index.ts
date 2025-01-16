const getGeocodingData = async (url: string | null) => {
  try {
    if (url) {
      //   get lat and lng by city name
      const firstResponse = await fetch(url);

      if (!firstResponse.ok) {
        throw new Error(
          `Error fetching geocoding data: ${firstResponse.statusText}`
        );
      }

      const { results: firstData } = await firstResponse.json();

      if (firstData.length === 0) {
        return { firstData };
      } else {
        const lat = firstData?.[0].geometry.lat;
        const lng = firstData?.[0].geometry.lng;
        if (lat && lng) {
          // get weather condition by lat and lng
          const secondRequest = await fetch(
            `${process.env.OPEN_METEO_URL}?latitude=${lat}&longitude=${lng}&current_weather=true`
          );
          if (!secondRequest.ok) {
            throw new Error(
              `Error fetching second request: ${secondRequest.statusText}`
            );
          }
          const secondData = await secondRequest.json();
          return { firstData, secondData };
        }
      }
      
    }
  } catch (error) {
    console.error(error);
    return { error: { message: error } };
  }
};

export { getGeocodingData };
