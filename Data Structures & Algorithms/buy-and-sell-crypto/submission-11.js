class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices){
  let minPrice = prices[0];
  let maxPrice = -9999999;
  let profit = 0;
  let posj = 0;
  let posi = 0;
  for (let i = 0, j = i + 1; j < prices.length; i++, j++) {
    if (prices[i] <= minPrice) {
      minPrice = prices[i];
      posi = i;
    }
    if (prices[j] >= maxPrice) {
      maxPrice = prices[j];
      posj = j;
    }
    if (posj > posi) {
      profit = maxPrice - minPrice;
    } 
    if (posj < posi) {
      maxPrice = -9999999;
    }
  }
  if (profit < 0) {
    profit = 0;
  }
//   console.log("minPrice", minPrice, "maxPrice", maxPrice, "profit", profit);
  return profit;
}
}
