console.log("testing substract product and sum of digit");

/**
 *
 * 1281. Subtract the Product and Sum of Digits of an Integer.
 *Problem statement ::  Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 * problem link: https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
 *
 *
 */

const subProductSum = (n) => {
  let sum = 0;
  let mult = 1;
  while (n) {
    sum += n % 10;
    mult = mult * (n % 10);
    n = Math.floor(n / 10);
  }
  console.log(sum);
  console.log(mult);
  return mult - sum;
};

let k = subProductSum(234);
console.log(k);
