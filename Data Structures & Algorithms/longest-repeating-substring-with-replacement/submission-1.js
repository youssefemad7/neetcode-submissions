class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
         let l = 0;
  let r = 0;
  let maxLength = 0;
  let maxFrequency = 0;
  let replaceCount = 0;
  let freq = new Map();
  for (let i = 0; i < s.length; i++) {
    let char = s[r];
    if (freq.get(char) === undefined) {
      freq.set(char, 1);
    } else {
      freq.set(char, freq.get(char) + 1);
    }
    maxFrequency = Math.max(maxFrequency, freq.get(char));
    r++;
    replaceCount = r - l - maxFrequency;
    if (replaceCount > k) {
      freq.set(s[l], freq.get(s[l]) - 1);
      l++;
    }
    maxLength = Math.max(maxLength, r - l);

  }
  return maxLength;
    }
}
