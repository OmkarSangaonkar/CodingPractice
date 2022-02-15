console.log("testing maximum wealth of person");
/**
 *
 * 1672. Richest Customer Wealth
 * problem link: https://leetcode.com/problems/richest-customer-wealth/
 */

var maximumWealth = (accounts) => {
  let max = 0;
  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      sum = sum + accounts[i][j];
    }
    if (sum > max) {
      max = sum;
    }
  }
  return max;
};

let output = maximumWealth([
  [1, 2, 3, 10],
  [3, 5, 5, 8],
  [7, 5, 2, 3],
]);
console.log(output);
