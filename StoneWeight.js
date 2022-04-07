/**
 *
 * 1046. Last Stone Weight
 * Problem Link >==> https://leetcode.com/problems/last-stone-weight/
 *
 */

var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b);
    const first = stones.pop();
    const second = stones.pop();
    if (first > second) {
      const newWeight = first - second;
      stones.push(newWeight);
    }
  }
  return stones[0] || 0;
};

const output = lastStoneWeight([665, 12, 45, 75, 65, 98, 32, 65, 98, 215]);

console.log(output);
