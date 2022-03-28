console.log("testing shuffle string");

/**
 *
 * 1528. Shuffle String
 *
 * Problem link ==> https://leetcode.com/problems/shuffle-string/
 *
 */

var restoreString = function (s, indices) {
  console.log(indices);
  let str = [];
  for (i = 0; i <= indices.length; i++) {
    str[indices[i]] = s[i];
  }
  return str.join("");
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
