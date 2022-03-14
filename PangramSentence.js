console.log("testing pangram sentence");

/**
 *
 * 1832. Check if the Sentence Is Pangram
 *
 * problem link ==> https://leetcode.com/problems/check-if-the-sentence-is-pangram/
 *
 *
 */

var checkIfPangram = function (sentence) {
  let output = true;
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < alphabets.length; i++) {
    if (!sentence.includes(alphabets[i])) {
      output = false;
    }
  }
  return output;
};

console.log(checkIfPangram("abcdefghijklmnopqrstuvwxyz"));
