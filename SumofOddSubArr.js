console.log("testing sum of odd sub array sum");

/**
 *
 * 1588. Sum of All Odd Length Subarrays
 * Problem Link ==> https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
 *
 */

var sumOddLengthSubarrays = function (arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j += 2) {
      count = count + arr.slice(i, j + 1).reduce((a, b) => a + b);
    }
  }
  return count;
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
