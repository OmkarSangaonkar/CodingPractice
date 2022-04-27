console.log("take user input till entering zero");
/**
 * Take integer inputs till the user enters 0 and print the sum of all numbers
 */

const userInput = () => {
  let sum = 0;

  do {
    var number = parseInt(prompt("Enter a positive integer: "));
    sum = sum + number;
  } while (number != 0);
  {
    console.log(`sum of numbers is: ${sum}`);
  }
};

userInput();
