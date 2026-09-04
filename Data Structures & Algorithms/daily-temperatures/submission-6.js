class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
  let stack = []; // نخزن indices
  let result = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let oldIndex = stack.pop();

      result[oldIndex] = i - oldIndex;
    }

    stack.push(i);
  }
  // console.log(result);
  return result;
}
}
