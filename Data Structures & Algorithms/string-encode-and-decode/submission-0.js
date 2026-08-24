class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
  let arr = [...strs];
  for (let i = 0; i < strs.length; i++) {
    arr[i] = arr[i].length + "#" + arr[i];
  }
  return arr.join("");
}

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
  let arr = [];
  let i = 0;
  while (i < str.length) {
    let arr2 = [];
    let len = "";
    let j = 0;
    while (str[i] !== "#") {
      len += str[i];
      i++;
      console.log(len);
    }
    len = Number(len);

    i++;
    while (len > 0) {
      arr2[j] = str[i];
      len--;
      i++;
      j++;
    }
    arr.push(arr2.join(""));
  }

  // arr = new String(arr.join(""));

  return arr;
}
}
