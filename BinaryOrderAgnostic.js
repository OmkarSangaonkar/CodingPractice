console.log("order agonstic binary search ");
/** here we are we dont know wheter array sorted as ascending or descending
 *
 */

const AgnosticArray = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  let isAscend = arr[start] < arr[end];
  console.log(isAscend);

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
  return -1;
};

// let output = AgnosticArray([1, 3, 5, 7, 9, 11, 12, 12, 16, 36, 58], 12);
let output = AgnosticArray([158, 120, 110, 90, 80, 70, 60, 50, 40, 30, 20], 20);
console.log(output);
