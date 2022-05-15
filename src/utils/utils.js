const parseNWSDate = (date) => {
  try {
    return new Date(date.substring(0, date.length - date.match(/\/.*$/)[0].length));
  } catch (error) {
    console.log("parseNWSDate", date);
  }
};

const matchWeatherToTime = (targetTime, array) => {
  for (const item of array) {
    if (parseNWSDate(item.validTime) >= new Date(targetTime)) {
      return item;
    }
  }
};

/* The passed-in array should be an array of objects with the shape of 
[{validTime, value}, {validTime, value}...] */
const getEventsInDate = (date, array) => {
  const dateItems = [];
  for (const item of array) {
    try {
      if (item.validTime && parseNWSDate(item.validTime).getDate() === date.getDate()) {
        dateItems.push(item);
      }
    } catch (error) {
      console.log(error, date);
      break;
    }
  }
  return dateItems;
};

export { parseNWSDate, matchWeatherToTime, getEventsInDate };
