class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
  let arr = [...board];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j || arr[i][j] === ".") {
        continue;
      }
      for (let x = 0; x < arr.length; x++) {
        if (j === x || arr[i][x]=== ".") {
        continue;
      }

        if (arr[i][j] === arr[i][x]) {
          console.log("NonValidSudoku");
          return false;
        }
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j || arr[j][i] === ".") {
        continue;
      }
      for (let x = 0; x < arr.length; x++) {
        if (j === x || arr[x][i] === ".") {
        continue;
      }

        if (arr[j][i] === arr[x][i]) {
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
      let seen = [];

      for (let x = i; x < i + 3; x++) {
        for (let y = j; y < j + 3; y++) {
          if (arr[x][y] === ".") {
            continue;
          }

          if (seen.includes(arr[x][y])) {
            console.log("NonValidSudoku");
            return false;
          }

          seen.push(arr[x][y]);
        }
      }
    }
  }

  console.log("ValidSudoku");
  return true;
}

}
