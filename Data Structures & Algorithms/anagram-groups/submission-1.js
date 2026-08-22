class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       let arr = [];
  let arr1 = [];
  for (let i = 0; i < strs.length; i++) {
    arr1[i] = strs[i].split("").sort().join("");
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == null) {
      continue;
    }
    let temp = [];
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[i] === arr1[j] && arr1[j] !== null) {
        temp.push(strs[j]);
        arr1[j] = null;
      }
      if (j == arr1.length - 1 && temp.length > 0) {
        temp.unshift(strs[i]);
      }
    }

if (temp.length === 0) {
      temp.push(strs[i]);
    }
    if (temp.length > 0) {
      arr.push(temp);
    }
    arr1[i] = null;
    }
    arr.sort((a, b) => a.length - b.length);
  return arr;
}
}
