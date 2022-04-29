console.log("testing maximum 69 number");
/**
 *
 * 1323. Maximum 69 Number
 *
 * problem link ==> https://leetcode.com/problems/maximum-69-number/
 */
var maximum69Number = function (num) {
  var str = num.toString(); // convert to string
  var res = str.replace("6", "9"); // replace 6 with 9
  console.log(res);
  return Number(res);
};

console.log(maximum69Number(969));
