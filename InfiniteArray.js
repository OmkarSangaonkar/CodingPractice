console.log("testing infinite array questions");

const infiniteArray = (arr, target) => {
  let start = 0;
  let end = 1;

  while (target > arr[end]) {
    let temp = end + 1; // this is a new start index
    // double the length of array
    //  end = previous end + size of array * 2
    end = end + (end - start + 1) * 2;
    start = temp;
  }

  return binarySearch(arr, target, start, end);
};

const binarySearch = (arr, target, start, end) => {
  // let start = 0;
  // let end = arr.length - 1;

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

const output = infiniteArray([1, 3, 5, 7, 8, 9, 15, 20, 24, 36, 45], 1);

console.log(output);
