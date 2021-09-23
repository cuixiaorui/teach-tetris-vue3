import { rotate } from "./matrix";

export class Box {
  shape: number[][];
  x: number;
  y: number;
  constructor() {
    this.x = 0;
    this.y = 0;
    this.shape = [
      [1, 1],
      [1, 1],
    ];
  }

  private _rotates = [];
  private _rotateIndex = 0;
  rotate() {
    const rotateHandler: Function = this._rotates[this._rotateIndex];
    if (!rotateHandler) return;
    this.shape = rotateHandler(this.shape);
    this._rotateIndex++;
    if (this._rotateIndex >= this._rotates.length) {
      this._rotateIndex = 0;
    }
  }

  public setRotates(rotates) {
    if (!rotates) return;
    this._rotates = rotates;
  }
}

const boxInfos = {
  1: {
    shape: [
      [1, 1],
      [1, 1],
    ],
  },

  2: {
    shape: [
      [1, 0, 0],
      [1, 1, 0],
      [0, 1, 0],
    ],
    rotateStrategy: [rotate, (m) => rotate(rotate(rotate(m)))],
  },
  3: {
    shape: [
      [1, 0, 0],
      [1, 0, 0],
      [1, 1, 0],
    ],
    rotateStrategy: [rotate, rotate, rotate, rotate],
  },
};

export function createBox() {
  const box = new Box();
  const { shape, rotateStrategy } = getRandomBoxInfo();

  box.shape = shape;
  box.setRotates(rotateStrategy);

  return box;
}

function getRandomBoxInfo() {
  const max = Object.keys(boxInfos).length;
  const type = Math.floor(Math.random() * max) + 1;
  // const type = 2;
  return boxInfos[type];
}
