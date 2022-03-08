console.log("testing rotated binary search");

/**
 * Problem statement ==>  Search in Rotated Sorted Array.
 * Problem link ==> https://leetcode.com/problems/search-in-rotated-sorted-array/
 */

var search = function (nums, target) {
  let piviot = findPiviot(nums);

  if (piviot == -1) {
    return binarySearch(nums, target, (start = 0), (end = nums.length - 1));
  }

  if (nums[piviot] == target) {
    return piviot;
  }

  if (target >= nums[0]) {
    return binarySearch(nums, target, (start = 0), (end = piviot - 1));
  }
  return binarySearch(
    nums,
    target,
    (start = piviot + 1),
    (end = nums.length - 1)
  );
};

const binarySearch = (arr, target, start, end) => {
  while (start <= end) {
    let mid = start + (end - start) / 2;
    mid = parseInt(mid);
    if (target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};

const findPiviot = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = start + (end - start) / 2;
    mid = parseInt(mid);

    if (mid < end && arr[mid] > arr[mid + 1]) {
      return mid;
    }
    if (mid > start && arr[mid] < arr[mid - 1]) {
      return mid - 1;
    }

    if (arr[mid] <= arr[start]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

// testing for duplicate elements in array

const findPiviotDuplicate = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = start + (end - start) / 2;
    mid = parseInt(mid);

    if (mid < end && arr[mid] > arr[mid + 1]) {
      return mid;
    }
    if (mid > start && arr[mid] < arr[mid - 1]) {
      return mid - 1;
    }

    // if elements at middle, start, end are equal then just skip the duplicates

    if (arr[mid] == arr[start] && arr[mid] == arr[end]) {
      // skip the duplicates
      // NOTE : What if these elements at start and end were the piviot??

      if (arr[start] > arr[start + 1]) {
        return start;
      }
      start++;

      // if end is piviot
      if (arr[end] < arr[end - 1]) {
        return end - 1;
      }
      end--;
    }

    // left side is sorted, so piviot should be in right
    else if (
      arr[start] < arr[mid] ||
      (arr[start] == arr[mid] && arr[mid] > arr[end])
    ) {
      start = mid + 1;
    } else {
      end = mid + 1;
    }
  }
  return -1;
};

// const output = search([6, 7, 1, 2, 3, 4, 5], 6);
const output = search([4, 5, 6, 7, 8, 4, 4], 6);
console.log(output);

// testing purpose only (testing piviot)

//  const output2 = findPiviot([6, 7, 1, 2, 3, 4, 5], 6);
const output2 = findPiviot([2, 6, 2, 2, 2, 2]);
console.log(output2);

const output3 = findPiviotDuplicate([4, 5, 6, 7, 8, 4, 4, 4]);
console.log(output3);
