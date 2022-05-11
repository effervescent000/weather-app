import { weatherConstants } from "../constants/weather.constants";

export const setWeather = (weather) => ({
  type: weatherConstants.SET_WEATHER,
  weather,
});
