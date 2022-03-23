console.log("testing binary search");
/**
 * Array must be sorted to perform binary search.
 *
 **/

const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = start + (end - start) / 2;
    mid = parseInt(mid);

    if (target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};

let output = binarySearch([-11, -5, -4, -3, -1, 0, 3, 5, 7, 8, 15], -1);

console.log(output);

// let myarray = [1, 56, 35, 4, 5, 68, 215, 3, 6, 59];
// let sortArr = myarray.sort();
// console.log(sortArr);
