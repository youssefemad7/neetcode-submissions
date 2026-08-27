class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
   longestConsecutive(nums) {
  if (nums.length === 0) {
    return 0;
  }
  const temp = nums.sort((a, b) => a - b);
  const arr = temp.filter((x, index) => x !== temp[index - 1]);
  let len = 1;
  let maxLen = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] == 1) {
      len++;
    }
    if (arr[i + 1] - arr[i] !== 1) {
      len = 1;
    }
    if (len > maxLen) {
      maxLen = len;
    }
  }

  console.log(arr);
  console.log(maxLen);

  return maxLen;
}
}
