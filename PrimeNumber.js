console.log("testing prime numbers");

let mynum = 2222222222;

if (mynum <= 1) {
  console.log("its niether prime nor composite.");
}

let c = 2;

while (c * c <= mynum) {
  if (mynum % c == 0) {
    console.log("number is not prime");
    c = c + 1;
    break;
  } else {
    console.log(" it is prime number");
    break;
  }
}
