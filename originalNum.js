console.log("testing original number");

var findFinalValue = function (nums, original) {
  if (!nums.includes(original)) return original;
  let sum = original * 2;
  while (nums.includes(sum)) {
    sum = sum * 2;
  }
  return sum;
};

const output = findFinalValue([5, 3, 6, 1, 12]);

console.log(output);
