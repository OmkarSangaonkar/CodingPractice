console.log("testing square root js");

const squareRoot = (num) => {
  let root = num ** (1 / 2);
  if (root % 1 == 0) {
    console.log(`Square root of ${num} is ${root}`);
  } else {
    root = ~~root;
    console.log(`Square root of ${num} is ${root}`);
  }
};

squareRoot(5);
