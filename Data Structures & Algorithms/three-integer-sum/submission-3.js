class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
  nums.sort((a, b) => a - b);
  let arr = [];
  let newtr;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1, k = nums.length - 1; j < k; ) {
      newtr = [nums[i], nums[j], nums[k]];
      newtr.sort((a, b) => a - b);
      if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
      } else if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
      } else if (nums[i] + nums[j] + nums[k] == 0) {
        let exists = arr.some(
          (triplet) =>
            triplet[0] === newtr[0] &&
            triplet[1] === newtr[1] &&
            triplet[2] === newtr[2],
        );

        if (!exists) {
          arr.push(newtr);
        }
        j++;
        k--;
      }
    }
  }

  console.log(arr);
  return arr;
}}
