import { parseNWSDate, matchWeatherToTime, getEventsForDate } from "./utils";

describe("Tests for parseNWSDate", () => {
  it("Parses a NWS date correctly", () => {
    const inputArray = [
      "2022-05-15T13:00:00+00:00/PT1H",
      "2022-05-15T07:00:00+00:00/PT4H",
      "2022-05-15T13:00:00+00:00/P1DT5H",
      "2022-05-15T21:00:00+00:00/PT10H",
      "2022-05-15T13:00:00+00:00/P6DT23H",
    ];
    for (const input of inputArray) {
      const output = parseNWSDate(input);
      expect(output).toBeDate();
      expect(output.getDate()).toEqual(15);
      expect(output.getMonth()).toEqual(5 - 1);
    }
  });
});

describe("Tests for matchWeatherToTime", () => {
  const targetTime = new Date("2022-05-15T13:00:00+00:00");
  const weatherArray = [
    { validTime: "2022-05-15T13:00:00+00:00/PT1H", value: 21.666666666666668 },
    { validTime: "2022-05-15T14:00:00+00:00/PT1H", value: 20 },
    { validTime: "2022-05-15T15:00:00+00:00/PT1H", value: 21.666666666666668 },
  ];
  it("Returns the correct object", () => {
    const output = matchWeatherToTime(targetTime, weatherArray);
    expect(output).toBeObject();
    expect(output.validTime).toEqual("2022-05-15T13:00:00+00:00/PT1H");
  });
});

describe("Tests for getEventsForDate", () => {
  const targetDate = new Date("2022-05-15T13:00:00+00:00");
  it("Gets only items from the correct date", () => {
    const weatherArray = [
      { validTime: "2022-05-13T13:00:00+00:00/PT1H", value: 21.666666666666668 },
      { validTime: "2022-05-13T14:00:00+00:00/PT1H", value: 21.666666666666668 },
      { validTime: "2022-05-14T14:00:00+00:00/PT1H", value: 20 },
      { validTime: "2022-05-14T15:00:00+00:00/PT1H", value: 20 },
      { validTime: "2022-05-15T15:00:00+00:00/PT1H", value: 21.666666666666668 },
      { validTime: "2022-05-15T16:00:00+00:00/PT1H", value: 21.666666666666668 },
    ];
    const output = getEventsForDate(targetDate, weatherArray);
    expect(output).toBeArray();
    expect(output).toHaveLength(2);
    expect(output).toEqual([
      { validTime: "2022-05-15T15:00:00+00:00/PT1H", value: 21.666666666666668 },
      { validTime: "2022-05-15T16:00:00+00:00/PT1H", value: 21.666666666666668 },
    ]);
  });
  it("Gets items from previous days if there are no matches for the targeted day", () => {
    const weatherArray = [
      { validTime: "2022-05-13T13:00:00+00:00/PT1H", value: 21.666666666666668 },
      { validTime: "2022-05-13T14:00:00+00:00/PT1H", value: 21.666666666666668 },
      { validTime: "2022-05-14T14:00:00+00:00/PT1H", value: 20 },
      { validTime: "2022-05-14T15:00:00+00:00/PT1H", value: 20 },
      { validTime: "2022-05-16T15:00:00+00:00/PT1H", value: 21.666666666666668 },
      { validTime: "2022-05-16T16:00:00+00:00/PT1H", value: 21.666666666666668 },
    ];
    const output = getEventsForDate(targetDate, weatherArray);
    expect(output).toBeArray();
    expect(output).toHaveLength(2);
    expect(output).toEqual([
      { validTime: "2022-05-14T14:00:00+00:00/PT1H", value: 20 },
      { validTime: "2022-05-14T15:00:00+00:00/PT1H", value: 20 },
    ]);
  });
});
