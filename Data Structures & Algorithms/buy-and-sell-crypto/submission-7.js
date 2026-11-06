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
      // console.log("minPrice", minPrice, "maxPrice", maxPrice, "profit", profit);
    }
    if (prices[j] >= maxPrice) {
      maxPrice = prices[j];
      posj = j;
      // console.log(
      //   "minPrice2",
      //   minPrice,
      //   "maxPrice2",
      //   maxPrice,
      //   "profit2",
      //   profit,
      // );
    }
    if (posj > posi) {
      profit = maxPrice - minPrice;
    }
    console.log(
      "i",
      i,
      "j",
      j,
      "posj",
      posj,
      "posi",
      posi,
      "profit",
      profit,
      "minPrice",
      minPrice,
      "maxPrice",
      maxPrice,
    );
    if (posj < posi) {
      maxPrice = -9999999;
    }
  }
  if (profit < 0) {
    profit = 0;
  }

  console.log("minPrice", minPrice, "maxPrice", maxPrice, "profit", profit);
  return profit;
}
}
