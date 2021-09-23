export function getBottomPoints(matrix) {
  const points: any = [];
  const row = matrix.length;
  matrix[row - 1].forEach((v, j) => {
    if (matrix[row - 1][j] > 0) {
      points.push({
        x: j,
        y: row - 1,
      });
    }
  });

  return points;
}

export function rotate(matrix) {
  let temp: Array<any> = [];
  const row = matrix.length;
  const col = matrix[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const newRow: number = row - 1 - j;

      if (!temp[newRow]) {
        temp[newRow] = [];
      }

      temp[newRow][i] = matrix[i][j];
    }
  }

  return temp;
}
