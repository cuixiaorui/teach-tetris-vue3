export function getBottomPoints(matrix) {
  const points: any = [];
  const row = matrix.length;
  matrix[row - 1].forEach((v, j) => {
    points.push({
      x: j,
      y: row - 1,
    });
  });

  return points;
}
