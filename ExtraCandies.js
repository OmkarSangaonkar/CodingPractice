console.log("calculating extra candies");

/**
 *
 * 1431. Kids With the Greatest Number of Candies
 * problem link : https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
 *
 */

var kidsWithCandies = function (candies, extraCandies) {
  let maxCandies = candies[0];

  for (let i = 1; i < candies.length; i++) {
    if (candies[i] > maxCandies) {
      maxCandies = candies[i];
    }
  }
  console.log(maxCandies);

  for (let i = 0; i < candies.length; i++) {
    (candies[i] = candies[i] + extraCandies >= maxCandies) ? true : false;
  }

  return candies;
};

let output = kidsWithCandies([2, 3, 1, 5, 2], 1);
console.log(output);
