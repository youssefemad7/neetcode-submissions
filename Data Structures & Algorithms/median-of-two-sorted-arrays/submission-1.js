class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  if (merged.length % 2 === 0) {
    const mid = Math.round(merged.length / 2);
    console.log((merged[mid] + merged[mid - 1]) / 2, merged, mid);
    return (merged[mid] + merged[mid - 1]) / 2;
  } else {
    const mid = Math.floor(merged.length / 2);
    console.log(merged[mid], merged, mid);
    return merged[mid];
  }
    }
}
