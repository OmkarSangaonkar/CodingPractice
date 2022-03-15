console.log("testing rotation array");
/**
 * 189. Rotate Array
 *
 * problem link ==>  https://leetcode.com/problems/rotate-array/
 *
 *
 */

var rotate = function (nums = [], k) {
  let elements;

  for (i = 0; i < k; i++) {
    elements = nums.pop();
    nums.unshift(elements);
  }
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

const arr = [1, 2, 3, 4, 5, 6, 7];

// let newarr;
// newarr = arr.pop();

// console.log(newarr);
