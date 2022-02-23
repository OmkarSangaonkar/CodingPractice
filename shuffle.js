let arr = [1, 3, 5, 7, 6, 4];
let newlength = arr.length / 2;
newlength = parseInt(newlength);

let newarray = [];
for (i = 0; i < newlength; i++) {
  newarray.push(arr[i]);
  newarray.push(arr[newlength + i]);
}

console.log(newarray);
