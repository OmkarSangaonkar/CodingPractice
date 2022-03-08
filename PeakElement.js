console.log("testing peak element of array");

/**
 * 162. Find Peak Element
 * problem link ==> https://leetcode.com/problems/find-peak-element/
 */

var findPeakElement = function (arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = start + (end - start) / 2;
    mid = parseInt(mid);

    if (arr[mid] > arr[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

const output = findPeakElement([1, 3, 4, 5, 6, 8, 9]);
console.log(output);
