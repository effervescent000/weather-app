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

export const dummyData = {
  data: [
    {
      id: 2987553,
      wikiDataId: "Q24371",
      type: "CITY",
      name: "L'Aldosa de Canillo",
      country: "Andorra",
      countryCode: "AD",
      region: "Canillo",
      regionCode: 2,
      latitude: 42.57777778,
      longitude: 1.61944444,
    },
    {
      id: 3086756,
      wikiDataId: "Q24486",
      type: "CITY",
      name: "La Cortinada",
      country: "Andorra",
      countryCode: "AD",
      region: "Ordino",
      regionCode: 5,
      latitude: 42.57667,
      longitude: 1.51773,
    },
    {
      id: 3056764,
      wikiDataId: "Q2536296",
      type: "CITY",
      name: "La Margineda",
      country: "Andorra",
      countryCode: "AD",
      region: "Andorra la Vella",
      regionCode: 7,
      latitude: 42.4859,
      longitude: 1.49045,
    },
    {
      id: 978,
      wikiDataId: "Q3820973",
      type: "CITY",
      name: "La Massana",
      country: "Andorra",
      countryCode: "AD",
      region: "La Massana",
      regionCode: 4,
      latitude: 42.544354,
      longitude: 1.515427,
    },
    {
      id: 759,
      wikiDataId: "Q1050185",
      type: "CITY",
      name: "Les Escaldes",
      country: "Andorra",
      countryCode: "AD",
      region: "Escaldes-Engordany",
      regionCode: "08",
      latitude: 42.5,
      longitude: 1.53333333,
    },
  ],
  links: [
    {
      rel: "first",
      href: "/data/world/v1/geo/cities?offset=0&limit=5",
    },
    {
      rel: "prev",
      href: "/data/world/v1/geo/cities?offset=0&limit=5",
    },
    {
      rel: "next",
      href: "/data/world/v1/geo/cities?offset=10&limit=5",
    },
    {
      rel: "last",
      href: "/data/world/v1/geo/cities?offset=273685&limit=5",
    },
  ],
  metadata: {
    currentOffset: 5,
    totalCount: 273690,
  },
};
