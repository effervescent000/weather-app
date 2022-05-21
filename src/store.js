import { configureStore } from "@reduxjs/toolkit";

import activityReducer from "./reducers/activity";
import locationReducer from "./reducers/location";
import weatherReducer from "./reducers/weather";

const store = configureStore({
  reducer: { location: locationReducer, weather: weatherReducer, activity: activityReducer },
});

export { store };
