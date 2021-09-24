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

  return map;
}

export function addBoxToMap(box, map) {
  for (let i = 0; i < box.shape.length; i++) {
    for (let j = 0; j < box.shape[0].length; j++) {
      const row = box.y + i;
      const col = box.x + j;

      if (box.shape[i][j] > 0) {
        map[row][col] = -1;
      }
    }
  }
}

export function eliminateLine(map) {
  let lines: Array<number> = [];
  for (let i = 0; i < map.length; i++) {
    const arr = map[i];

    const boo = arr.every((v) => {
      return v === -1;
    });

    if (boo) {
      lines.push(i);
    }
  }

  const mapCol = map[0].length;

  lines.forEach((n) => {
    map.splice(n, 1);
    // 补上新的行
    map.unshift(new Array(mapCol).fill(0));
  });
}
