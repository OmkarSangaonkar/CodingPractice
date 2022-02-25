console.log("testing no of good pairs");

/**
 *
 * 1512. Number of Good Pairs
 * problem link:  https://leetcode.com/problems/number-of-good-pairs/
 *
 */

var numIdenticalPairs = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) count += 1;
    }
  }
  return count;
};

const output = numIdenticalPairs([1, 2, 3, 1, 1, 3]);
console.log(output);
