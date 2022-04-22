console.log("testing maximum of subarray");

/**
 *
 * 53. Maximum Subarray
 *
 * https://leetcode.com/problems/maximum-subarray/
 *
 */

var maxSubArray = function (nums) {
  var maxint = Math.pow(2, 53);
  var max_so_far = -maxint - 1;
  var max_ending_here = 0;

  for (var i = 0; i < nums.length; i++) {
    max_ending_here = max_ending_here + nums[i];
    if (max_so_far < max_ending_here) max_so_far = max_ending_here;

    if (max_ending_here < 0) max_ending_here = 0;
  }
  return max_so_far;
};
