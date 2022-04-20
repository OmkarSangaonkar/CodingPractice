console.log("testing sort sentence");

var sortSentence = function (s) {
  let str = "";
  for (i = 0; i <= s.length; i++) {
    if (s[i] == " ") {
      let maxVal = s[i - 1];

      for (j = 0; j < s.length; j++) {
        if (s[i - 1] > maxVal) {
          maxVal = s[i - 1];
        }
      }
      return maxVal;
    }
  }
};

console.log(sortSentence("is2 sentence4 This1 a3"));
