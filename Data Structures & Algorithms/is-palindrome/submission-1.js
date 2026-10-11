class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
          const str = s.toLowerCase();
  for (let i = 0, j = str.length - 1; i <= j; ) {
    while (/[a-z0-9]/.test(str[j]) == false) {
      j--;
    }
    while (/[a-z0-9]/.test(str[i]) == false) {
      i++;
    }
    if (str[j] == str[i]) {
      i++;
      j--;
    } else if (str[i] != str[j]) {
      return false;
    }
  }
  console.log(str);
  return true;
    }
}
