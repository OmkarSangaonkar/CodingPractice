console.log("testing maximum product of two numbers");

/**
 *
 * 1464. Maximum Product of Two Elements in an Array
 *
 * https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
 *
 */

var maxProduct = function (nums) {
  let maxMult = 0;
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      //   console.log(nums[j] - 1);
      let maxNumber = (nums[i] - 1) * (nums[j] - 1);
      //   console.log(maxNumber);
      if (maxNumber > maxMult) {
        maxMult = maxNumber;
        // console.log(maxMult);
      }
    }
  }
  return maxMult;
};

console.log(maxProduct([3, 4, 5, 2]));
