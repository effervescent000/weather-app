import { configureStore } from "@reduxjs/toolkit";

import locationReducer from "./reducers/location";
import weatherReducer from "./reducers/weather";

const store = configureStore({ reducer: { location: locationReducer, weather: weatherReducer } });

export { store };
