console.log("testing palindrome");

const palindrome = (x) => {
  if (x < 0) {
    return false;
  }

  x = x.toString();
  console.log(x);
  let a = x.toString().split("").reverse().join("");
  console.log(a);
  //   console.log(typeof a);
  if (x == a) {
    return true;
  } else {
    return false;
  }
};

palindrome(121);
