class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
  let arr = [...board];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === ".") {
        continue;
      }
      for (let k = 0; k < arr.length; k++) {
        if (j === k || arr[i][k] === ".") {
          continue;
        }
        if (arr[i][k] === arr[i][j]) {
          console.log("NonValidSudoku");
          return false;
        }
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i] === ".") {
        continue;
      }
      for (let k = 0; k < arr.length; k++) {
        if (j === k || arr[k][i] === ".") {
          continue;
        }
        if (arr[k][i] === arr[j][i]) {
          console.log("NonValidSudoku");
          return false;
        }
      }
    }
  }

  // 1-i < 3 && j < 3
  // 2-i > 2 && i < 6 && j < 3
  // 3-i > 5 && i < 9 && j < 3
  // 4-i < 3 && j > 2 && j < 6
  // 5-i > 2 && i < 6 && j > 2 && j < 6
  // 6-i > 5 && i < 9 && j > 2 && j < 6
  // 7-i < 3 && j > 5 && j < 9
  // 8-i > 2 && i < 6 && j > 5 && j < 9
  // 9-i > 5 && i < 9 && j > 5 && j < 9
  for (let i = 0; i < arr.length; i += 3) {
  for (let j = 0; j < arr.length; j += 3) {

    for (let k = i; k < i + 3; k++) {
      for (let l = j; l < j + 3; l++) {

        if (arr[k][l] === ".") {
          continue;
        }

        for (let x = i; x < i + 3; x++) {
          for (let y = j; y < j + 3; y++) {

            if (k === x && l === y) {
              continue;
            }

            if (arr[x][y] === ".") {
              continue;
            }

            if (arr[k][l] === arr[x][y]) {
              console.log("NonValidSudoku");
              return false;
            }
          }
        }
      }
    }
  }
}

  console.log("ValidSudoku");
  return true;
}

}
