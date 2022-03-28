console.log("testing minimum sum of four digit array");

/**
 *
 * 2160. Minimum Sum of Four Digit Number After Splitting Digits
 *
 * problem link ==> https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/
 *
 */

var minimumSum = function (num) {
  num = String(num);
  num = num.split("").sort().join("");
  console.log(num);
  let num1 = "";
  let num2 = "";
  for (let i = 0; i < num.length; i = i + 2) {
    num1 += num[i];
    num2 += num[i + 1];
  }
  return Number(num1) + Number(num2);
};

let output = minimumSum(2932);
console.log(output);
