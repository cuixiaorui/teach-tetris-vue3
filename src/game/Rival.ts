import { createBoxByType } from "./Box";
import { Game } from "./Game";
import { message } from "./message";

export class Rival {
  private _game: any;

  constructor(game: Game) {
    this._game = game;
    this._game.setCreateBoxStrategy(this.createBoxStrategy.bind(this));
    message.on("left", this.handleLeft.bind(this));
    message.on("right", this.handleRight.bind(this));
    message.on("rotate", this.handleRotate.bind(this));
    message.on("moveDown", this.handleDown.bind(this));
    message.on("createBox", this.handleCreateBox.bind(this));
  }

  createBoxStrategy() {
	  console.log("-------------",this._boxInfo.box.type)
    return createBoxByType(this._boxInfo.box.type);
  }

  _boxInfo;
  handleCreateBox(info) {
    this._boxInfo = info;
  }

  handleDown() {
    this._game.moveBoxToDown();
  }

  handleLeft() {
    console.log("rival - left");
    this._game.moveBoxToLeft();
  }

  handleRight() {
    console.log("rival - right");
    this._game.moveBoxToRight();
  }

  handleRotate() {
    console.log("rival - rotate");
    this._game.rotateBox();
  }
}
