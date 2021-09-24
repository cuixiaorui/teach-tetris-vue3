import { addBoxToMap, eliminateLine, initMap } from "./map";
import { Box, createBox } from "./Box";
import { render } from "./renderer";
import { hitBottomBoundary, hitBottomBox } from "./hit";

export class Game {
  private _map: any;
  private _activeBox;
  private _createBoxStrategy: any;
  constructor(box, map) {
    this._map = map;
    this._activeBox = box;
    this._createBoxStrategy = createBox
  }

  render() {
    render(this._activeBox, this._map);
  }

  moveBoxToLeft() {
    this._activeBox.x--;
  }

  moveBoxToRight() {
    this._activeBox.x++;
  }

  rotateBox() {
    this._activeBox.rotate();
  }

  moveBoxToDown() {
    // 1. 获取 box 底部的所有的点
    // 只要有一个点大于了 游戏的范围的话， 那么就不可以移动啦
    if (
      hitBottomBoundary(this._activeBox, this._map) ||
      hitBottomBox(this._activeBox, this._map)
    ) {
      addBoxToMap(this._activeBox, this._map);
      eliminateLine(this._map);
      // 重新给一个 box
      this._activeBox = this._createBoxStrategy();
      return;
    }

    // 2. 检测是不是有某个点超出了游戏的范围
    this._activeBox.y++;
  }

  setBox(box: Box) {
    this._activeBox = box;
  }
  setCreateBoxStrategy(strategy) {
    this._createBoxStrategy = strategy;
  }
}
