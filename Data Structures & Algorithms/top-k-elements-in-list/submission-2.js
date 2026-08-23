class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
     topKFrequent(nums, k) {
  const temp = nums;
  const arr = [];
  let arr1 = [];
  const map = new Map();

  for (let i = 0; i < temp.length; i++) {
    let len = 1;
    if (temp[i] == null) {
      continue;
    }
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  const entries = Array.from(map);

  for (let i = 0; i < entries.length; i++) {
    arr.push([entries[i][1], entries[i][0]]);
  }

  arr.sort((a, b) => b[0] - a[0]);
  for (let i = 0; i < k; i++) {
    arr1.push(arr[i][1]);
  }
  return arr1;
}
}
