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
  return array.at(-1);
};

/* The passed-in array should be an array of objects with the shape of 
[{validTime, value}, {validTime, value}...] */
const getEventsForDate = (date, array) => {
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
  if (dateItems.length === 0) {
    const targetDate = new Date(date);
    while (dateItems.length === 0) {
      // as far as I can tell the NWS API only returns data starting on the day it's requested
      // so if we've reached yesterday then we're not going to find any more matches
      if (targetDate.getDate() === new Date().getDate() - 1) {
        break;
      }
      targetDate.setDate(targetDate.getDate() - 1);
      for (const item of array) {
        if (item.validTime && parseNWSDate(item.validTime).getDate() === targetDate.getDate()) {
          dateItems.push(item);
        }
      }
    }
  }
  return dateItems;
};

export { parseNWSDate, matchWeatherToTime, getEventsForDate };
