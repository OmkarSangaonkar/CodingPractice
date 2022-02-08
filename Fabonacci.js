console.log("testing fabonacci series");

const fabonacci = (nums) => {
  let fab = [];
  let n1 = 0;
  let n2 = 1;
  let sum;
  fab.push(n1);
  for (let i = 0; i <= nums; i++) {
    sum = n1 + n2;
    [n1, n2] = [n2, sum];
    fab.push(n1);
    // console.log(i);
    // console.log(fab);
  }
  return fab;
};

const getFab = fabonacci(8);
console.log(getFab);
