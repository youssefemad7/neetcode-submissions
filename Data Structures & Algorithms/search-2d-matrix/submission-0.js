class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let arr = matrix
    .join()
    .split(",")
    .map((x) => parseInt(x));

  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let i = Math.floor((start + end) / 2);

    if (arr[i] === target) {
      console.log(target, i);
      return true;
    } else if (arr[i] < target) {
      start = i + 1;
    } else {
      end = i - 1;
    }
  }
  console.log(arr);
  return false;
    }
}
