console.log("testing smallest letter ");

/**
 * Here we are using binary search algorithm.
 * 744. Find Smallest Letter Greater Than Target
 * problem link ==> https://leetcode.com/problems/find-smallest-letter-greater-than-target/
 *
 */

const nextGreatestLetter = (letters, target) => {
  console.log(letters.length);
  let start = 0;
  let end = letters.length - 1;

  while (start <= end) {
    let mid = start + (end - start) / 2;
    mid = parseInt(mid);

    if (target < letters[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return letters[start % letters.length];
};

const output = nextGreatestLetter(["a", "b", "c", "d"], "b");

console.log(output);
