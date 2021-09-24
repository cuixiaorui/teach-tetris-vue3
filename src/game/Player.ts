import { moveDownTimeInterval } from ".";
import { createBox } from "./Box";
import { Game } from "./Game";
import { message } from "./message";
import { addTicker } from "./ticker";
import { intervalTimer } from "./utils";

export class Player {
  private _game: any;
  constructor(game: Game) {
    this._game = game;
    this._game.setCreateBoxStrategy(this.createBoxStrategy.bind(this));
    window.addEventListener("keydown", this.handleKeydown.bind(this));
  }
  createBoxStrategy() {
    const box = createBox();

    message.emit("createBox", {
      box: {
        type: box.type,
      },
    });
    return box;
  }

  start() {
    addTicker(this.handleBoxMoveDown.bind(this));
  }

  _isDown = intervalTimer(moveDownTimeInterval);
  handleBoxMoveDown(n) {
    if (!this._game) return;

    if (this._isDown(n)) {
      this._game.moveBoxToDown();
      message.emit("moveDown");
    }
  }

  handleKeydown(e) {
    switch (e.code) {
      case "ArrowLeft":
        this._game.moveBoxToLeft();
        message.emit("left");
        break;
      case "ArrowRight":
        this._game.moveBoxToRight();
        message.emit("right");
        break;

      case "ArrowUp":
        this._game.rotateBox();
        message.emit("rotate");

      default:
        break;
    }
  }
}
