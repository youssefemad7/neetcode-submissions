
class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  largestRectangleArea(heights) {
    let left = [];
    let right = [];
    let stack = [];
    let answer = 0;

    // Find the nearest smaller bar on the left
    for (let i = 0; i < heights.length; i++) {
      while (
        stack.length > 0 &&
        heights[stack[stack.length - 1]] >= heights[i]
      ) {
        stack.pop();
      }

      left[i] = stack.length > 0
        ? stack[stack.length - 1] + 1
        : 0;

      stack.push(i);
    }

    // Clear the stack before scanning from the right
    stack = [];

    // Find the nearest smaller bar on the right
    for (let i = heights.length - 1; i >= 0; i--) {
      while (
        stack.length > 0 &&
        heights[stack[stack.length - 1]] >= heights[i]
      ) {
        stack.pop();
      }

      right[i] = stack.length > 0
        ? stack[stack.length - 1] - 1
        : heights.length - 1;

      stack.push(i);
    }

    // Calculate the largest rectangle for each bar
    for (let i = 0; i < heights.length; i++) {
      let width = right[i] - left[i] + 1;
      let area = heights[i] * width;

      if (area > answer) {
        answer = area;
      }
    }

    return answer;
  }
}
