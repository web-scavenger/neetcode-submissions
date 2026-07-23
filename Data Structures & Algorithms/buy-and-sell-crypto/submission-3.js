class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // brute force
        // iterate the elements and on every iteration -- run one more iteration, to calculate the diff
        // save max value
        // time: O(n^2)
        // space: O(1)

        // sliding window
        // variables: 
        // profit = 0
        // min = Infinity 
        // for loop via prices
        // min = Min(min, p[i])
        // profit = max(profit, p[i] - min)
        // time: O(n)
        // space: O(1)

        let profit = 0;
        let buy = Infinity;

        for(let i = 0; i< prices.length; i++) {
            buy = Math.min(buy, prices[i]);
            profit = Math.max(profit, prices[i] - buy);
        }
        

        return profit
    }
}
