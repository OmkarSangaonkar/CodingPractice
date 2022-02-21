console.log("testing minimum of array");

const minArray = (arr) => {
  let minimum = arr[0];
  for (min of arr) {
    if (min < minimum) {
      minimum = min;
    }
  }
  console.log(minimum);
};

minArray([25, 21, 30, -51, 98, -56, -74, 24, -878, -987, -125, -1254]);
