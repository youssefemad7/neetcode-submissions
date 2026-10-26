class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
          let max = Math.max(...piles);
  let k = 1;
  let total = 0;
  let left = 1;
  let right = max;
  if (piles.length === h) {
    k = max;
    console.log(k);

    return k;
  } else if (h > piles.length) {
    while (left <= right) {
      k = Math.ceil((left + right) / 2);

      // console.log("K:", k, "Total:", total, "Max:", max);
      total = 0;
      for (let i = 0; i < piles.length; i++) {
        total += Math.ceil(piles[i] / k);
      }
      if (total > h) {
        left = k + 1;
      } else {
        right = k - 1;
      }
    }

    console.log(k, total);

    return left;
  }
    }
}
