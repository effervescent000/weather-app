export const activityConstants = {
  SET_ACTIVITY: "activity/activityChange",
};

export const NUM_DAYS = 7;

export const activitiesArray = [
  {
    name: "Running",
    conditions: {
      apparentTemperature: [15.5, 26.6],
      probabilityOfPrecipitation: [0, 30],
      relativeHumidity: [0, 60],
      windSpeed: [0, 20],
    },
    icon: `${process.env.PUBLIC_URL}/assets/images/running.png`,
  },
  {
    name: "Surfing",
    conditions: {
      probabilityOfPrecipitation: [0, 0],
      waveHeight: [1.2, 2.5],
    },
    icon: `${process.env.PUBLIC_URL}/assets/images/surfing.png`,
  },
];
