console.log("testing cell range");

// let str = "C5:L2";

/**
 *
 * 2194. Cells in a Range on an Excel Sheet
 *
 * Problem Link ==> https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/
 *
 */

var cellsInRange = function (s) {
  const output = [];
  const firstColIndex = s.charCodeAt(0);
  const firstRowIndex = s.charCodeAt(1);

  const endColIndex = s.charCodeAt(3);
  const endRowIndex = s.charCodeAt(4);

  for (let c = firstColIndex; c <= endColIndex; c++) {
    for (let r = firstRowIndex; r <= endRowIndex; r++) {
      output.push(`${String.fromCharCode(c)}${String.fromCharCode(r)}`);
    }
  }

  return output;
};
