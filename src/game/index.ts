export * from "./config";

import { Box } from "./Box";
import { initMap } from "./map";
import { getBottomPoints } from "./matrix";
import { render } from "./renderer";
import { addTicker } from "./ticker";
import { intervalTimer } from "./utils";
import { gameRow } from "./config";

export function startGame(map) {
  initMap(map);

  // box
  // 我要有一个 方块
  const box = new Box();
  box.x = 1;
  box.y = 3;

  // 1秒 执行一次
  let timeInterval = 1000;
  const isDown = intervalTimer(timeInterval);
  function handleTicker(n) {
    if (isDown(n)) {
      moveDown(box, map);
    }

    render(box, map);
  }

  addTicker(handleTicker);

  // 方块可以掉落
  window.addEventListener("keydown", () => {
    box.y++;
  });
}

export function moveDown(box, map) {
  // 1. 获取 box 底部的所有的点
  // matrix
  //       [
  //         [1, 1],
  //         [1, 1],
  //       ];
  const points = getBottomPoints(box.shape);
  // y
  // point.y + box.y + 1 >= gameRow
  const mapRow = map.length;

  const boo = points.some((point) => {
    return point.y + box.y + 1 >= mapRow;
  });
  // 只要有一个点大于了 游戏的范围的话， 那么就不可以移动啦

  if (boo) return;

  // 2. 检测是不是有某个点超出了游戏的范围
  box.y++;
}
