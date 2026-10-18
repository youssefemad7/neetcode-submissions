class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
     trap(height) {
  let area = 0;
  let totalArea = 0;
  let total = 0;
  for (let i = 0, j = i + 1; i < height.length - 1; ) {
    if (height[i] == 0) {
      i++;
      j = i + 1;
      continue;
    }
    let maxIndex = j;
    while (j < height.length && height[j] < height[i]) {
      if (height[j] >= height[maxIndex]) {
        maxIndex = j;
      }
      j++;
    }
    // if (j === height.length - 1 && height[j] < height[i]) {
    if (j === height.length) {
      j = maxIndex;
    }

    total = 0;
    for (let k = i + 1; k <= j - 1; k++) {
      total += height[k];
    }
    area = Math.min(height[i], height[j]) * (j - i - 1) - total;
    totalArea += area;
    console.log("Area" + i, area);

    i = j;
    j = i + 1;
  }

  console.log("Total Area = ", totalArea);
  return totalArea;

}
}
