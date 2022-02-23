console.log("finding first and last position ");

/**
 * 34. Find First and Last Position of Element in Sorted Array
 *
 * problem link ==>https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 *
 */

var searchRange = function (nums, target) {
  // check for first occurance of index

  let ans = [-1, -1];
  ans[0] = search(nums, target, (findStartIndex = true));
  if (ans[0] != -1) {
    ans[1] = search(nums, target, false);
  }
  return ans;
};

// this function just returns the index value of target.

let search = (nums, target, findStartIndex) => {
  let ans = -1;
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = start + (end - start) / 2;
    mid = parseInt(mid);

    if (target < nums[mid]) {
      end = mid - 1;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      ans = mid;
      if (findStartIndex) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return ans;
};

let output = searchRange([1, 4, 4, 4, 4, 4, 5, 7, 7, 7, 8], 7);
console.log(output);
