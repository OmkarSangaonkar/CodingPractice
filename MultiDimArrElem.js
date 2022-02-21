console.log("finding element in multidimensional array");

const MultiDimElement = (arr, target) => {
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (arr[row][col] == target) {
        return [row, col];
      }
    }
  }
};

let output = MultiDimElement(
  [
    [1, 2, 3],
    [33, 51, 25],
    [7, 52, 61, 41],
    [42, 7, 45, 36, 24],
  ],
  24
);

console.log(output);
