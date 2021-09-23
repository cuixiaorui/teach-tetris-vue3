export * from "./config";

import { Box, createBox } from "./Box";
import { addBoxToMap, eliminateLine, initMap } from "./map";
import { render } from "./renderer";
import { addTicker } from "./ticker";
import { intervalTimer } from "./utils";
import { hitBottomBoundary, hitBottomBox } from "./hit";

let activeBox;
export function startGame(map) {
  initMap(map);

  // box
  // 我要有一个 方块
  activeBox = createBox();

  // 1秒 执行一次
  let timeInterval = 1000;
  const isDown = intervalTimer(timeInterval);
  function handleTicker(n) {
    if (isDown(n)) {
      moveDown(activeBox, map);
    }

    render(activeBox, map);
  }

  addTicker(handleTicker);

  // 方块可以掉落
  window.addEventListener("keydown", (e) => {
    switch (e.code) {
      case "ArrowLeft":
        activeBox.x--;

        break;
      case "ArrowRight":
        activeBox.x++;

        break;

      case "ArrowUp":
        activeBox.rotate();

      default:
        break;
    }
  });
}

export function moveDown(box, map) {
  // 1. 获取 box 底部的所有的点
  // 只要有一个点大于了 游戏的范围的话， 那么就不可以移动啦
  if (hitBottomBoundary(box, map) || hitBottomBox(box, map)) {
    addBoxToMap(box, map);
    eliminateLine(map);
    // 重新给一个 box
    activeBox = createBox();
    return;
  }

  // 2. 检测是不是有某个点超出了游戏的范围
  box.y++;
}
