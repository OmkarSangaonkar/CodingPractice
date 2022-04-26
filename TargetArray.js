console.log("testing target array");

/**
 *
 * 1389. Create Target Array in the Given Order
 * Problem Link ==> https://leetcode.com/problems/create-target-array-in-the-given-order/
 *
 */

var createTargetArray = function (nums, index) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    output.splice(index[i], 0, nums[i]);
  }
  return output;
};

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));

let str = "hellOOO";
let output = str.toLowerCase();
console.log(output);
