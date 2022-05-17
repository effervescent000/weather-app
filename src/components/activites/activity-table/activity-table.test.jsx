import { render, screen, waitFor } from "@testing-library/react";

import ActivityTable from "./activity-table";
import { wrapInStore, createTestStore } from "../../../utils/testUtils";

describe("ActivityTable renders successfully", () => {
  describe("Renders with no activity selected", () => {
    const store = createTestStore({
      weather: {
        temperature: {
          uom: "wmoUnit:degC",
          values: [
            {
              validTime: "2022-05-16T17:00:00+00:00/PT1H",
              value: 30,
            },
            {
              validTime: "2022-05-16T18:00:00+00:00/PT1H",
              value: 30.555555555555557,
            },
            {
              validTime: "2022-05-16T19:00:00+00:00/PT1H",
              value: 22.222222222222221,
            },
            {
              validTime: "2022-05-16T20:00:00+00:00/PT2H",
              value: 25,
            },
          ],
        },
        relativeHumidity: {
          uom: "wmoUnit:percent",
          values: [
            {
              validTime: "2022-05-16T17:00:00+00:00/PT1H",
              value: 52,
            },
            {
              validTime: "2022-05-16T18:00:00+00:00/PT1H",
              value: 46,
            },
            {
              validTime: "2022-05-16T19:00:00+00:00/PT1H",
              value: 79,
            },
            {
              validTime: "2022-05-16T20:00:00+00:00/PT1H",
              value: 74,
            },
          ],
        },
        apparentTemperature: {
          uom: "wmoUnit:degC",
          values: [
            {
              validTime: "2022-05-16T17:00:00+00:00/PT1H",
              value: 31.111111111111111,
            },
            {
              validTime: "2022-05-16T18:00:00+00:00/PT1H",
              value: 31.666666666666668,
            },
            {
              validTime: "2022-05-16T19:00:00+00:00/PT1H",
              value: 21.111111111111111,
            },
          ],
        },
        skyCover: {
          uom: "wmoUnit:percent",
          values: [
            {
              validTime: "2022-05-16T17:00:00+00:00/PT1H",
              value: 39,
            },
            {
              validTime: "2022-05-16T18:00:00+00:00/PT1H",
              value: 80,
            },
            {
              validTime: "2022-05-16T19:00:00+00:00/PT1H",
              value: 77,
            },
            {
              validTime: "2022-05-16T20:00:00+00:00/PT1H",
              value: 93,
            },
            {
              validTime: "2022-05-16T21:00:00+00:00/PT1H",
              value: 60,
            },
            {
              validTime: "2022-05-16T22:00:00+00:00/PT1H",
              value: 63,
            },
            {
              validTime: "2022-05-16T23:00:00+00:00/PT1H",
              value: 66,
            },
          ],
        },
        windSpeed: {
          uom: "wmoUnit:km_h-1",
          values: [
            {
              validTime: "2022-05-16T17:00:00+00:00/PT1H",
              value: 24.076000000000001,
            },
            {
              validTime: "2022-05-16T18:00:00+00:00/PT2H",
              value: 25.928000000000001,
            },
            {
              validTime: "2022-05-16T20:00:00+00:00/PT2H",
              value: 24.076000000000001,
            },
            {
              validTime: "2022-05-16T22:00:00+00:00/PT1H",
              value: 22.224,
            },
            {
              validTime: "2022-05-16T23:00:00+00:00/PT1H",
              value: 18.52,
            },
          ],
        },
        weather: {
          values: [
            {
              validTime: "2022-05-16T17:00:00+00:00/PT1H",
              value: [
                {
                  coverage: null,
                  weather: null,
                  intensity: null,
                  visibility: {
                    unitCode: "wmoUnit:km",
                    value: null,
                  },
                  attributes: [],
                },
              ],
            },
            {
              validTime: "2022-05-16T18:00:00+00:00/PT2H",
              value: [
                {
                  coverage: "chance",
                  weather: "thunderstorms",
                  intensity: "heavy",
                  visibility: {
                    unitCode: "wmoUnit:km",
                    value: null,
                  },
                  attributes: ["damaging_wind", "large_hail"],
                },
                {
                  coverage: "chance",
                  weather: "rain_showers",
                  intensity: "light",
                  visibility: {
                    unitCode: "wmoUnit:km",
                    value: null,
                  },
                  attributes: [],
                },
              ],
            },
          ],
        },
        hazards: {
          values: [
            {
              validTime: "2022-05-16T23:00:00+00:00/PT2H",
              value: [
                {
                  phenomenon: "SV",
                  significance: "A",
                  event_number: 228,
                },
              ],
            },
            {
              validTime: "2022-05-17T01:00:00+00:00/PT1H",
              value: [],
            },
          ],
        },
        probabilityOfPrecipitation: {
          uom: "wmoUnit:percent",
          values: [
            {
              validTime: "2022-05-16T17:00:00+00:00/PT1H",
              value: 7,
            },
            {
              validTime: "2022-05-16T18:00:00+00:00/PT2H",
              value: 32,
            },
            {
              validTime: "2022-05-16T20:00:00+00:00/PT4H",
              value: 42,
            },
            {
              validTime: "2022-05-17T00:00:00+00:00/PT2H",
              value: 31,
            },
          ],
        },
        lightningActivityLevel: {
          values: [
            {
              validTime: "2022-05-16T17:00:00+00:00/PT1H",
              value: 1,
            },
            {
              validTime: "2022-05-16T18:00:00+00:00/PT2H",
              value: 3,
            },
            {
              validTime: "2022-05-16T20:00:00+00:00/PT1H",
              value: 4,
            },
            {
              validTime: "2022-05-16T21:00:00+00:00/PT5H",
              value: 3,
            },
          ],
        },
        waveHeight: {
          uom: "wmoUnit:m",
          values: [
            {
              validTime: "2022-05-16T17:00:00+00:00/PT3H",
              value: 0.60960000000000003,
            },
            {
              validTime: "2022-05-16T20:00:00+00:00/PT6H",
              value: 0.91439999999999999,
            },
            {
              validTime: "2022-05-17T02:00:00+00:00/P4DT14H",
              value: 0.60960000000000003,
            },
            {
              validTime: "2022-05-21T16:00:00+00:00/PT12H",
              value: 0.91439999999999999,
            },
          ],
        },
      },
    });
    it("Renders successfully", () => {
      render(wrapInStore(<ActivityTable />, store));
      expect(screen.getByRole("columnheader", { name: "0" })).toBeInTheDocument();
    });
  });
});
