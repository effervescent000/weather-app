import { render, screen, waitFor } from "@testing-library/react";

import TableCell from "./table-cell";
import { wrapInStore, wrapTableCell, createTestStore } from "../../../utils/testUtils";

describe("TableCell renders", () => {
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
  const cellId = 1;
  it("Displays blue with matching weather", async () => {
    const weather = {
      probabilityOfPrecipitation: { validTime: "some time", value: 0 },
      waveHeight: { validTime: "some time", value: 2 },
    };
    render(wrapInStore(wrapTableCell(<TableCell id={cellId} weather={weather} />), store));

    await waitFor(() =>
      expect(screen.getByTestId(`background-${cellId}`)).toHaveStyle(`background-color: #17b890`)
    );
  });
  it("Displays a blank background when no weather values match", () => {
    const weather = {
      probabilityOfPrecipitation: { validTime: "some time", value: 30 },
      waveHeight: { validTime: "some time", value: 0.2 },
    };
    render(wrapInStore(wrapTableCell(<TableCell id={cellId} weather={weather} />), store));
    expect(screen.getByTestId(`background-${cellId}`)).not.toHaveStyle(`background-color: #17b890`);
  });
  it("Displays a blank background when at least one weather value doesn't match", () => {
    const weather = {
      probabilityOfPrecipitation: { validTime: "some time", value: 30 },
      waveHeight: { validTime: "some time", value: 2 },
    };
    render(wrapInStore(wrapTableCell(<TableCell id={cellId} weather={weather} />), store));
    expect(screen.getByTestId(`background-${cellId}`)).not.toHaveStyle(`background-color: #17b890`);
  });
});
