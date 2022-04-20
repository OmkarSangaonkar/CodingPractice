console.log("testing absolute difference");

/**
 *
 * 2006. Count Number of Pairs With Absolute Difference K
 * Problem link ==> https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/
 *
 */

var countKDifference = function (nums, k) {
  let count = 0;
  for (i = 0; i <= nums.length; i++) {
    for (j = 0; j <= nums.length; j++) {
      if (nums[j] - nums[i] == k) {
        count++;
      }
    }
  }
  return count;
};

console.log(countKDifference([10, 2, 10, 9, 1, 6, 8, 9, 2, 8], 5));
