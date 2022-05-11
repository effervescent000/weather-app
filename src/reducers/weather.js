import { weatherConstants } from "../constants/weather.constants";

const baseState = {
  temperature: {},
  dewpoint: {},
  maxTemperature: {},
  minTemperature: {},
  relativeHumidity: {},
  apparentTemperature: {},
  heatIndex: {},
  windChill: {},
  skyCover: {},
  windDirection: {},
  windSpeed: {},
  windGust: {},
  weather: {},
  hazards: {},
  probabilityOfPrecipitation: {},
  quantitativePrecipitation: {},
  iceAccumulation: {},
  snowfallAmount: {},
  waveHeight: {},
  primarySwellHeight: {},
};

const weatherReducer = (state = baseState, action) => {
  switch (action.type) {
    case weatherConstants.SET_WEATHER:
      return { ...action.weather };
    default:
      return state;
  }
};

export default weatherReducer;
