class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
      // console.log(stack);
    }
    if (s[i] === ")" || s[i] === "}" || s[i] === "]") {
      if (s[i] === ")" && stack[stack.length - 1] === "(") {
        stack.pop();
      } else if (s[i] === "]" && stack[stack.length - 1] === "[") {
        stack.pop();
      } else if (s[i] === "}" && stack[stack.length - 1] === "{") {
        stack.pop();
      } else return false;
    }
    console.log(stack);
  }
   if (
    stack[stack.length - 1] === "(" ||
    stack[stack.length - 1] === "{" ||
    stack[stack.length - 1] === "["
  ) {
    return false;
  }

  return true;
    }
}
