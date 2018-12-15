const N = 10;
const A = new Array[N][N]();

const M = Math.floor(N / 2);

//Here I am attempting ot rotate point by point.  I need to adjust this to move rows by rows
//the for loop will still be needed to move inside of the first layer.  It will always run
// floor(N/2)_times
// the rotate will run 4N times
// this will result in a N^2 runtime as every single square must be touched once.
function rotate(x, y, min, max) {
  if (x === min && y === min) {
    let x = A[(x, y)];
    rotate(max, min, min, max);
    A[min][max] = x;
  } else if (x === max && y === min) {
    rotate(max, max, min, max);
    A[max][max] = A[min][max];
  } else if (x === max && y === max) {
    rotate(min, max, min, max);
    A[min][max] = A[max][max];
  } else if (x === min && y === max) {
    A[min][min] = A[min][max];
  }
}

for (let i = 0; i < M; i++) {
  rotate(i, i, i, N - i);
}
