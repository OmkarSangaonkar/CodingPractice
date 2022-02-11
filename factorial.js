console.log("testing factorial of number");
/**
 * find factorial of number
 */

const factorial = (n) => {
  if (n === 0 || n === 1) {
    console.log("factorial is 1");
  } else {
    let mult = 1;
    while (n >= 1) {
      mult = n * mult;

      n--;
    }
    return mult;
  }
};

let x = factorial(3);

console.log(`factorial is ${x}`);
