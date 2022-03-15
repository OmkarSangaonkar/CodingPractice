console.log("tesing flipping image");
/**
 *
 * 832. Flipping an Image
 *
 * problem link ==> https://leetcode.com/problems/flipping-an-image/
 *
 *
 */

var flipAndInvertImage = function (image) {
  const result = [];
  for (let i = 0; i < image.length; i++) {
    result.push([]);
    for (let j = image[i].length - 1; j >= 0; j--) {
      result[i].push(image[i][j] ? 0 : 1);
    }
  }
  return result;
};

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
);
