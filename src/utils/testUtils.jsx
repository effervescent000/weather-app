import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import activityReducer from "../reducers/activity";
import weatherReducer from "../reducers/weather";
import locationReducer from "../reducers/location";

const wrapInStore = (ui, store) => {
  return <Provider store={store}>{ui}</Provider>;
};

const wrapTableCell = (ui) => {
  return (
    <table>
      <tbody>
        <tr>{ui}</tr>
      </tbody>
    </table>
  );
};

const createTestStore = (state = { activity: null, weather: null, location: null }) => {
  const store = configureStore({
    reducer: {
      location: state.location
        ? (location, action) => locationReducer(state.location, action)
        : locationReducer,
      weather: state.weather
        ? (weather, action) => weatherReducer(state.weather, action)
        : weatherReducer,
      activity: state.activity
        ? (activity, action) => activityReducer(state.activity, action)
        : activityReducer,
    },
  });
  return store;
};

export { wrapInStore, wrapTableCell, createTestStore };
