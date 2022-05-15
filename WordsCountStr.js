function WordCount(str) {
  var totalSoFar = 1;
  for (var i = 0; i < WordCount.length; i++) {
    if (str[i] === " ") {
      totalSoFar = +1;
    }
  }
  return totalSoFar;
}

console.log(WordCount("Random String this is me"));
