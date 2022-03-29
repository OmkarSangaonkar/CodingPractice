console.log("testing Linnear search");

const LinnearSearch = (arr = [], target) => {
  //   check if length of array is zero(empty array).

  if (arr.length == 0) {
    return 0;
  }

  //   run for loop
  for (i = 0; i < arr.length; i++) {
    let elem = arr[i];
    if (elem == target) {
      return i;
      //   console.log("found it");
    }
  }
  return false;
};

let x = LinnearSearch([12, 224, 15, 16, 75, 36, 98, 68], 98);
console.log(x);
