// console.log("heo");
// let n = 10;
// let i = 1;
// let p = 0;

// for (count = 2; count <= n; count++) {
//   let temp = i;
//   i = i + p;
//   p = temp;
// }

// console.log(i);

var buildArray = function (nums) {
  nums = [0, 8, 5, 7, 6, 3, 5, 4];
  let ans = [];
  for (let i = 0; i < nums.length - 1; i++) {
    ans.push(nums[nums[i]]);
  }
  return ans;
};
