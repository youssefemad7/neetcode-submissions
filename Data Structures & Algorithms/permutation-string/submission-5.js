class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    areEqual(map1, map2) {
  if (map1.size !== map2.size) return false;

  for (let [key, value] of map1) {
    if (map2.get(key) !== value) return false;
  }

  return true;
}
    checkInclusion(s1, s2) {
  let freq1 = new Map();
  let freq2 = new Map();
  let left = 0;
  let right = s1.length - 1;
  for (let i = 0; i < s1.length; i++) {
    if (freq1.get(s1[i]) === undefined) {
      freq1.set(s1[i], 1);
    } else {
      freq1.set(s1[i], freq1.get(s1[i]) + 1);
    }
    if (freq2.get(s2[i]) === undefined) {
      freq2.set(s2[i], 1);
    } else {
      freq2.set(s2[i], freq2.get(s2[i]) + 1);
    }
  }

  while (right < s2.length) {
    if (this.areEqual(freq1, freq2)) {
      console.log("True", freq1, freq2);
      return true;
    } else {
      freq2.set(s2[left], freq2.get(s2[left]) - 1);
      if (freq2.get(s2[left]) === 0) {
        freq2.delete(s2[left]);
      }
      right++;
      left++;
      if (freq2.get(s2[right]) === undefined) {
        freq2.set(s2[right], 1);
      } else {
        freq2.set(s2[right], freq2.get(s2[right]) + 1);
      }
      console.log("First", freq1, freq2, left, right);
    }
  }
  // console.log(freq1, freq2, left, right);
  // console.log("False");
  return false;
}
}
