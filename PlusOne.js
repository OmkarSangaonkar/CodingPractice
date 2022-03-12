console.log("testing plus one ");

/**
 *
 * problem ::  Plus One
 * problem link::  https://leetcode.com/problems/plus-one/
 *
 */

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  return [1, ...digits];
};

let output = plusOne([9, 8, 9]);
console.log(output);
