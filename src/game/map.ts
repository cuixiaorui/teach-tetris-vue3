import { gameCol, gameRow } from "../game";

// map

export function initMap(map) {
  // initMap
  for (let i = 0; i < gameRow; i++) {
    const arr: Array<number> = [];
    for (let j = 0; j < gameCol; j++) {
      arr.push(0);
    }

    map.push(arr);
  }
}
