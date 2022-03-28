console.log("testing jwels and stones");

// 771. Jewels and Stones
// Problem link ==> https://leetcode.com/problems/jewels-and-stones/

var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (i = 0; i <= stones.length; i++) {
    for (j = 0; j <= jewels.length - 1; j++) {
      if (jewels[j] === stones[i]) {
        count++;
      }
    }
  }
  return count;
};

console.log(numJewelsInStones("az", "AAVVZZ"));
