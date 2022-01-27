console.log("testing repeted num");

var containsDuplicate = function (nums) {
  var x = nums[0];
  // console.log(x);
  // nums.sort();

  for (var i = 1; i <= nums.length - 1; i++) {
    if (x === nums[i]) {
      return true;
    }
  }
  return false;
};

let arr = containsDuplicate([111, 2, 3, 4]);
console.log(arr);
