console.log("final value of array sum");

/**
 * 2011. Final Value of Variable After Performing Operations
 * 
 * link of Problem == https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

 *
*/

var finalValueAfterOperations = function (operations) {
  let output = 0;
  for (i in operations) {
    if (operations[i] == "++X" || operations[i] == "X++") {
      output++;
    } else {
      output--;
    }
  }
  return output;
};

let x = finalValueAfterOperations(["--X", "--X", "X--", "X--", "X++"]);

console.log(x);

//output = -3
