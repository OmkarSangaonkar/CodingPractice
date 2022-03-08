console.log("testing rotation count");

const rotationCount = (arr) => {
  let piviot = findPiviot(arr);
  return piviot + 1;
};

const findPiviot = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = start + (end - start) / 2;
    mid = parseInt(mid);

    if (mid < end && arr[mid] > arr[mid + 1]) {
      return mid;
    }
    if (mid > start && arr[mid] < arr[mid - 1]) {
      return mid - 1;
    }

    if (arr[mid] <= arr[start]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

// const output = rotationCount([1, 2, 3, 4, 5, 6]);  //testcase 1
const output = rotationCount([4, 5, 6, 7, 2, 3]); //testcase 2
console.log(output);
