console.log("testing higest altitude");

/**
 *
 * 1732. Find the Highest Altitude
 *
 * problem link ==> https://leetcode.com/problems/find-the-highest-altitude/
 *
 *
 */

var sumOfArray = function (gain) {
  let arr = [];
  let sum;
  let n1 = 0;
  arr.push(n1);
  for (i = 0; i < gain.length; i++) {
    sum = n1 + gain[i];
    // console.log(sum);
    n1 = sum;
    arr.push(sum);
  }
  return arr;
};

const output = sumOfArray([-5, 1, 5, 0, -7]);
console.log(output);

var maxOfArray = function (gain) {
  let maxVal = gain[0];
  for (i = 0; i < gain.length; i++) {
    if (gain[i] > maxVal) {
      maxVal = gain[i];
    }
  }
  return maxVal;
};

console.log(maxOfArray(output));

// Alternative Approch

/**
 * 
 * 
const largestAltitude = function(gain) {
    let highest = 0;
    let altitude = 0;
    for(let i=0;i<gain.length;i++){
        altitude += gain[i]
        if(altitude > highest){
            highest = altitude
        }
    }
    return highest;
};
 */
