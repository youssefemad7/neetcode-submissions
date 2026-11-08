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
    while (r < s.length) {
    while (set.has(s[r])) {
      set.delete(s[l]);

      l++;
    }
    set.add(s[r]);
    maxLength = Math.max(maxLength, set.size);

    r++;
  }
  }
  if (set.has(undefined)) {
    console.log("Set has undefined");
    return 0;
  }

  return maxLength;
    }
}
