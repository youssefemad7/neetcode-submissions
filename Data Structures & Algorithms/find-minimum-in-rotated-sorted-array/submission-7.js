class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;
  if (nums.length === 2) {
    if (nums[0] > nums[1]) {
      // console.log("mid:", nums[1]);

      return nums[1];
    } else {
      // console.log("mid2:", nums[0]);

      return nums[0];
    }
  }
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    console.log("mid0:", nums[mid], "right0:", right, "left0:", left);
    if (nums[mid + 1] < nums[mid]) {
      // console.log("mid:", nums[mid + 1]);

      return nums[mid + 1];
    } else if (
      mid + 1 < nums.length &&
      mid - 1 >= 0 &&
      nums[mid] < nums[mid + 1] &&
      nums[mid] < nums[mid - 1]
    ) {
      // console.log("mid1:", nums[mid], "right1:", right, "left1:", left);

      return nums[mid];
    } else if (
      mid + 1 < nums.length &&
      mid - 1 >= 0 &&
      nums[mid + 1] > nums[mid] &&
      nums[mid - 1] < nums[mid] &&
      nums[mid] < nums[right]
    ) {
      console.log("mid:", nums[mid], "right:", right, "left:", left);

      right = mid - 1;
    } else if (nums[right] < nums[mid] ) {
      left = mid + 1;
    }
    else if (nums[right] > nums[mid]) {
      right = mid ;
    }
  }
  // console.log("mid:", nums[mid]);
  return nums[left];
}
}
