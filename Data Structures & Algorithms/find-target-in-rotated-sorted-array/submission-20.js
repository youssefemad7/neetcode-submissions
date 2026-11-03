class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  if (nums[start] === target) {
    console.log("Target", target, "Start", start);
    return start;
  }
  if (nums[end] === target) {
    console.log("Target", target, "End", end);
    return end;
  }
  while (start <= end) {
    let i = Math.ceil((start + end) / 2);
    console.log("start:", start, "end:", end, "i:", i, "nums[i]:", nums[i]);

    if (nums[i] === target) {
      console.log("Target", target, "index", i);
      return i;
    } else if (
      nums[i] >= nums[start] &&
      target >= nums[start] &&
      target < nums[i]
    ) {
      console.log("End1", end);

      end = i - 1;
    } else if (
      nums[i] >= nums[start] &&
      target <= nums[start] &&
      target < nums[i]
    ) {
      console.log("Start1", start);
      start = i + 1;
    } else if (
      target >= nums[start] &&
      target > nums[i] &&
      target >= nums[end]
    ) {
      console.log("End2", end);
      end = i - 1;
    } else if (target >= nums[start] && target > nums[i]) {
      console.log("start2", start);
      start = i + 1;
    } else if (target <= nums[start] && target > nums[i]) {
      console.log("Start3", start);
      start = i + 1;
    } else if (nums[i] <= nums[start] && target < nums[i]) {
      console.log("End3", end);
      end = i - 1;
    }
  }
  
  console.log("-1");

  return -1;
}
}
