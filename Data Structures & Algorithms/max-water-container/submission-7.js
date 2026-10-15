class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
  let max1 = 0;
  let max2 = 0;
  let num1 = 0;
  let num2 = 0;
  let area = 0;
  let min = 0;
  let newarea = 0;
  for (let i = 0, j = heights.length - 1; i <= j; ) {
    if (heights[i] > num1 ) {
      max1 = i;
      num1 = heights[i];
      console.log("Num1", num1);
    }
    if (heights[j] > num2) {
      max2 = j;
      num2 = heights[j];
      console.log("Num2", num2);
    }
    if (num1 > num2) {
      min = num2;
    } else {
      min = num1;
    }
    area = (max2 - max1) * min;
    if (newarea < area) {
      newarea = area;
      console.log("New AREA", newarea);
    }
    if (heights[i] < heights[j]) {
      i++;
    } else if (heights[i] > heights[j]) {
      j--;
    } else {
      i++;
    }
  }

  console.log(max1, max2, newarea, min);
  return newarea;
}
}
