const M = 10;
const N = 9;
const A = new array[10][9]();

function findZero(i, j) {
  let isZero = false;
  if (A[i][j] === 0) isZero = true;

  if (i < M) findZero(i + 1, j);
  else if (j < N) findZero(0, j + 1);

  if (isZero === true) zeroRowCol(i, j);
}

function zeroRowCol(i, j) {
  for (let x = 0; x < M; x++) {
    A[x][j] = 0;
  }
  for (let x = 0; x < N; x++) {
    A[i][x] = 0;
  }
}

findZero(0, 0);
