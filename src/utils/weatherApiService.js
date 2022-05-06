import axios from "axios";

import { weatherURLs } from "./constants";

export class WeatherAPIService {
  constructor() {
    this.userAgent = "tarasWeatherAppTest";
  }

  async makeGetRequest(endpoint) {
    const url = `${weatherURLs().ROOT}/${endpoint}`;
    const response = await axios.get(url);
    return response;
  }

  async GET(url, callback) {
    this.makeGetRequest(url).then(callback);
  }
}

export default new WeatherAPIService();
