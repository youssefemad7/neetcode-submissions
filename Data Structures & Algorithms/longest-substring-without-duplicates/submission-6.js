class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
         let l = 0;
  let r = 1;
  let maxLength = 1;
  let set = new Set();
  set.add(s[0]);
  while (r < s.length) {
    if (!set.has(s[r])) {
      set.add(s[r]);
      maxLength = Math.max(maxLength, set.size);
    } else {
      while (set.has(s[r])) {
        set.delete(s[l]);

        l++;
      }
      set.add(s[r]);
    }
    r++;
  }
  if (set.has(undefined)) {
    console.log("Set has undefined");
    return 0;
  }

  return maxLength;
    }
}
