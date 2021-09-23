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
    [0, 0, 0, 0, 0],
  ];

  const box = new Box();
  box.shape = [
    [1, 0, 0],
    [1, 1, 0],
    [0, 1, 0],
  ];
  box.y = 0;

  moveDown(box, map);
  expect(box.y).toBe(1);

  moveDown(box, map);
  expect(box.y).toBe(2);

  moveDown(box, map);
  expect(box.y).toBe(2);
  expect(map).toEqual([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [-1, 0, 0, 0, 0],
    [-1, -1, 0, 0, 0],
    [0, -1, 0, 0, 0],
  ]);
});

test("moveDown when hit other box", () => {
  // map
  // box.y
  // moveDown
  // 检测 Box.y 有没有发生改变

  const map = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [-1, -1, 0, 0, 0],
    [-1, -1, 0, 0, 0],
  ];

  const box = new Box();
  box.shape = [
    [1, 1],
    [1, 1],
  ];
  box.y = 0;

  moveDown(box, map);
  expect(box.y).toBe(0);
  expect(map).toEqual([
    [-1, -1, 0, 0, 0],
    [-1, -1, 0, 0, 0],
    [-1, -1, 0, 0, 0],
    [-1, -1, 0, 0, 0],
  ]);
});

test("当 box shape 有空的时候 向下移动的碰撞", () => {
  // map
  // box.y
  // moveDown
  // 检测 Box.y 有没有发生改变

  const map = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [-1, 0, 0, 0, 0],
    [-1, -1, 0, 0, 0],
    [0, -1, 0, 0, 0],
  ];

  const box = new Box();
  box.shape = [
    [1, 0, 0],
    [1, 1, 0],
    [0, 1, 0],
  ];
  box.y = 0;

  moveDown(box, map);
  expect(box.y).toBe(1);
  moveDown(box, map);
  expect(box.y).toBe(1);
  expect(map).toEqual([
    [0, 0, 0, 0, 0],
    [-1, 0, 0, 0, 0],
    [-1, -1, 0, 0, 0],
    [-1, -1, 0, 0, 0],
    [-1, -1, 0, 0, 0],
    [0, -1, 0, 0, 0],
  ]);
});

test("消行", () => {
  const map = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, -1, -1],
  ];

  const box = new Box();
  box.shape = [
    [1, 1],
    [1, 1],
  ];
  box.y = 2;

  moveDown(box, map);
  expect(map).toEqual([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [-1, -1, 0, 0],
  ]);
});
