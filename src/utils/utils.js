const matchWeatherToTime = (targetTime, weatherArray) => {
  for (const item of weatherArray) {
    if (
      Date.parse(item.validTime.substring(0, item.validTime.length - 5)) >= Date.parse(targetTime)
    ) {
      return item;
    }
  }
};

export { matchWeatherToTime };
