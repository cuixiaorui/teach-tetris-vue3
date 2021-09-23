import { getBottomPoints } from "../src/game/matrix";

test("should return bottom points", () => {
  const matrix = [
    [1, 1],
    [1, 1],
  ];

  expect(getBottomPoints(matrix)).toEqual([
    {
      x: 0,
      y: 1,
    },
    {
      x: 1,
      y: 1,
    },
  ]);
});
