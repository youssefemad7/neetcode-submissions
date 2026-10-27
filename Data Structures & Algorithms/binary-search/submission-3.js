class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
         let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let i = Math.floor((start + end) / 2);
    if (nums[i] === target) {
      console.log(target, i);
      return i;
    } else if (nums[i] < target) {
      start = i + 1;
    } else {
      end = i - 1;
    }
  }
  return -1;
    }
}
