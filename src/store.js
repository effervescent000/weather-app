import { configureStore } from "@reduxjs/toolkit";

import activityReducer from "./reducers/activity";
import locationReducer from "./reducers/location";
import weatherReducer from "./reducers/weather";
import locationDataReducer from "./reducers/locationData";
import favoritesReducer from "./reducers/favorites";

const store = configureStore({
  reducer: {
    location: locationReducer,
    weather: weatherReducer,
    activity: activityReducer,
    locationData: locationDataReducer,
    favorites: favoritesReducer,
  },
});

export { store };
