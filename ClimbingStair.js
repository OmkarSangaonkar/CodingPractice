console.log("testing climbing stairs");

/**
 *
 * 70. Climbing Stairs
 *
 * Problem link ==> https://leetcode.com/problems/climbing-stairs/
 *
 */

var climbStairs = function (n) {
  let fab = [];

  if (n == 1) {
    return 1;
  }
  if (n == 2) {
    return 2;
  }
  fab[1] = 1;
  fab[2] = 2;

  for (let i = 3; i <= n; i++) {
    fab[i] = fab[i - 1] + fab[i - 2];
  }
  return fab[n];
};

console.log(climbStairs(4));

// const nums = 11;
// console.log(nums / 2);
// console.log(parseInt(nums / 2));
// console.log(nums % 2);
