import { render, screen, waitFor } from "@testing-library/react";

import TableRow from "./table-row";
import { wrapInStore, createTestStore, wrapTableRow } from "../../../utils/testUtils";

describe("TableRow renders successfully", () => {
  const store = createTestStore({
    activity: {
      name: "Surfing",
      conditions: {
        probabilityOfPrecipitation: [0, 0],
        waveHeight: [1.2, 2.5],
      },
      icon: `${process.env.PUBLIC_URL}/assets/images/surfing.png`,
    },
  });
  const date = new Date("2022-05-15T15:00:00+00:00");
  const weatherForDay = {
    apparentTemperature: [
      { validTime: "2022-05-15T15:00:00+00:00/PT1H", value: 21.666666666666668 },
      { validTime: "2022-05-15T16:00:00+00:00/PT1H", value: 21.666666666666668 },
    ],
    probabilityOfPrecipitation: [
      { validTime: "2022-05-15T15:00:00+00:00/PT1H", value: 10 },
      { validTime: "2022-05-15T16:00:00+00:00/PT1H", value: 30 },
    ],
    waveHeight: [
      { validTime: "2022-05-15T15:00:00+00:00/PT1H", value: 1 },
      { validTime: "2022-05-15T16:00:00+00:00/PT1H", value: 2 },
    ],
  };

  it("Renders rows with no cells if weather data is undefined", () => {
    render(wrapInStore(wrapTableRow(<TableRow date={date} />), store));
    const dateHeader = screen.getByRole("columnheader", { name: /5\/15/ });
    expect(dateHeader).toBeInTheDocument();
    const cells = screen.queryAllByRole("cell");
    expect(cells).toHaveLength(0);
  });
  it("Renders cells with weather data", () => {
    render(
      wrapInStore(wrapTableRow(<TableRow date={date} weatherForDay={weatherForDay} />), store)
    );
    const cells = screen.getAllByRole("cell");
    expect(cells).not.toHaveLength(0);
  });
});
