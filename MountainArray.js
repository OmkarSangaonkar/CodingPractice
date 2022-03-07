console.log("testing moutain or biotonic array");

/* first increasing then descresing like mountain 
  e.g [ 1,2,4,6,8,7,5,3,1]

*/

/**
 * problem : 852. Peak Index in a Mountain Array
 * problem link ==>  https://leetcode.com/problems/peak-index-in-a-mountain-array/
 */

const moutainArray = (arr) => {
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

const output = moutainArray([1, 2, 3, 4, 5, 7, 9, 10, 4, 3, 2, 1]);

console.log(output);
