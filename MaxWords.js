console.log("test maximum number of words");

var mostWordsFound = function (sentences) {
  let maxNum = 0;
  for (let i = 0; i < sentences.length; i++) {
    let splittedArray = sentences[i].split(" ");
    console.log(splittedArray[0]);
    if (maxNum < splittedArray.length) {
      maxNum = splittedArray.length;
    }
  }
  return maxNum;
};

const output = mostWordsFound([
  "please wait",
  "continue to fight",
  "continue to win",
]);

console.log(output);
