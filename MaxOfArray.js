console.log("maximum value of array");

let myArr = [24, 2, 14, 58, 69, 756, 1258, 2356, 1245, 12565];

let maxVal = myArr[0];

for (i = 0; i < myArr.length; i++) {
  if (myArr[i] > maxVal) {
    maxVal = myArr[i];
  }
}
console.log(maxVal);
