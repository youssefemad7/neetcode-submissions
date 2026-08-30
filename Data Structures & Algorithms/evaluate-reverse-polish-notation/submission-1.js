class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let arr = [];
  for (let i = 0; i < tokens.length; i++) {
    //Numbers
    if (!isNaN(tokens[i])) {
      arr.push(Number(tokens[i]));
      console.log(tokens[i]);
    }
    //operators
    else if (isNaN(tokens[i])) {
      const temp2 = arr.pop();
      const temp = arr.pop();
      let res;
      if (tokens[i] === "+") {
        res = Math.trunc(temp + temp2);
      } else if (tokens[i] === "-") {
    res = Math.trunc(temp - temp2);
      } else if (tokens[i] === "*") {
    res = Math.trunc(temp * temp2);
      } else {
    res = Math.trunc(temp / temp2);
      }
      arr.push(res);
    }
  }
  return Number(arr);
    }
}
