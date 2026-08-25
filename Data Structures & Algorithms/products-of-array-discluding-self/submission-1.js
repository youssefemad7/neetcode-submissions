class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
   productExceptSelf(nums) {
  let arr = [...nums];
  arr.fill(1);
  let arrL = [...arr];
  let arrR = [...arr];
  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      arrL[i] = 1;
      continue;
    } else {
      arrL[i] = arrL[i - 1] * nums[i - 1];
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i == nums.length - 1) {
      arrR[i] = 1;
      continue;
    } else {
      arrR[i] = arrR[i + 1] * nums[i + 1];
    }
  }
  for (let i = 0; i < nums.length; i++) {
    arr[i] = arrL[i] * arrR[i];
  }
  // console.log(arrL);
  // console.log(arrR);
  // console.log(arr);

  return arr;
}
}
