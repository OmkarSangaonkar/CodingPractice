console.log("testing how many numbers in array have even numbers of digits");

/**1295. Find Numbers with Even Number of Digits
 *
 * Problem Link : https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
 */

var findNumbers = function (nums) {
  let count = 0;
  for (number of nums) {
    if (evenNum(number)) {
      count++;
    }
  }
  return count;
};

let evenNum = (number) => {
  let digits = numberOfDigits(number);
  if (digits % 2 == 0) {
    return true;
  }
  return false;
};

let numberOfDigits = (number) => {
  let count = 0;
  while (number > 0) {
    count++;
    number = number / 10;
    number = parseInt(number);
  }
  return count;
};

let output = findNumbers([121, 325, 3654, 32]);
console.log(output);
