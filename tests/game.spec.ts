import { Box } from "../src/game/Box";
import { moveDown } from "../src/game";
test("moveDown", () => {
  // map
  // box.y
  // moveDown
  // 检测 Box.y 有没有发生改变

  const map = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  const box = new Box();
  box.shape = [
    [1, 1],
    [1, 1],
  ];
  box.y = 0;

  moveDown(box, map);
  expect(box.y).toBe(1);

  moveDown(box, map);
  expect(box.y).toBe(2);

  moveDown(box, map);
  expect(box.y).toBe(2);
});
