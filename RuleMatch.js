console.log("rule matching testing");

/**
 * 1773. Count Items Matching a Rule
 *
 * problem link ==> https://leetcode.com/problems/count-items-matching-a-rule/
 */

var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  for (i = 0; i < items.length; i++) {
    if (ruleKey === "type") {
      if (items[i][0] === ruleValue) {
        count++;
      }
    }
    if (ruleKey === "color") {
      if (items[i][1] === ruleValue) {
        count++;
      }
    }
    if (ruleKey === "name") {
      if (items[i][2] === ruleValue) {
        count++;
      }
    }
  }
  return count;
};

let output = countMatches([
  ["phone", "blue", "pixel"],
  ["computer", "silver", "lenovo"],
  ["phone", "gold", "iphone"],
]);

console.log(output);
