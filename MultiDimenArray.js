console.log("cheking 2D arrays");

let myArr = [
  [1, 2],
  [1, 3, 5],
  [2, 8],
];
let sum = 0;

for (row = 0; row < myArr.length; row++) {
  for (col = 0; col < myArr[row].length; col++) {
    console.log(myArr[row][col] + " ");
    // console.log(`${myArr[(row, col)]} `);
  }
}
