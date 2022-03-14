console.log("testing smaller number than current");

/**
 *
 * 1365. How Many Numbers Are Smaller Than the Current Number
 *
 * problem link ==>  https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
 *
 */

var smallerNumbersThanCurrent = function (nums) {
  let arr = [];

  for (i = 0; i < nums.length; i++) {
    let count = 0;
    for (j = 0; j <= nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    arr.push(count);
  }
  return arr;
};

console.log(smallerNumbersThanCurrent([4, 4, 4, 4]));
