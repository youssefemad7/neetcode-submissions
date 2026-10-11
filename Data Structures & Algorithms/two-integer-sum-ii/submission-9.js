class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
      twoSum(numbers, target) {
  const arr = numbers;
  let indx;
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= target && target > 0) {
      break;
    }
    indx = i;
  }

  for (let i = 0, j = indx; i < indx; ) {
    if (arr[i] + arr[j] > target) {
      j--;
    } else if (arr[i] + arr[j] < target) {
      i++;
    } else {
      console.log(i + 1, j + 1);

      return [i + 1, j + 1];
    }
  }
  for (let i = 0, j = arr.length - 1; i < arr.length - 1; ) {
    if (arr[i] + arr[j] > target) {
      j--;
    } else if (arr[i] + arr[j] < target) {
      i++;
    } else {
      console.log(i + 1, j + 1);

      return [i + 1, j + 1];
    }
  }
  console.log(arr, indx, arr2);
}
}
