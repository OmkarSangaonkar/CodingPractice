console.log("testing ceiling of number");
/**
 * ceiling of number == find the smallest number in array that is greater than equal to target.
 *
 * e.g. ==>  arr = [10,12,13,16,19,22]
 * if target is 12 then ceiling is 12 (smallest no greater than equal to )
 * if target is 17 then ceiling is 19 (as above)
 *
 */

const ceilingNumber = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  let isAscend = arr[start] < arr[end];
  // console.log(isAscend);

  while (start <= end) {
    let mid = start + (end - start) / 2;
    mid = parseInt(mid);

    if (arr[mid] === target) {
      return mid;
    }

    if (isAscend) {
      if (target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (target > arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return start;
};

const output = ceilingNumber([10, 12, 14, 16, 18, 20], 11);

console.log(output);
