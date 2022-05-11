export const locationURLs = (countryIds = "US", namePrefix = "") => {
  return {
    ROOT: "http://geodb-free-service.wirefreethought.com/v1/geo",
    CITIES: `cities?${countryIds ? `countryIds=${countryIds}&` : ""}namePrefix=${namePrefix}`,
  };
};

export const weatherURLs = ({ gridX = 0, gridY = 0, office = "", coords = [] } = {}) => {
  return {
    ROOT: "https://api.weather.gov/",
    GETGRID: `points/${coords[0]},${coords[1]}`,
    FORECAST: `gridpoints/${office}/${gridX},${gridY}`,
  };
};
