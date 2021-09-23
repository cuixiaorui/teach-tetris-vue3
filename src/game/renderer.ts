export function render(box, map) {
  // 重置
  // map

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j] > 0) {
        map[i][j] = 0;
      }
    }
  }

  for (let i = 0; i < box.shape.length; i++) {
    for (let j = 0; j < box.shape[0].length; j++) {
      const row = i + box.y;
      const col = j + box.x;

      map[row][col] = 1;
    }
  }
}
