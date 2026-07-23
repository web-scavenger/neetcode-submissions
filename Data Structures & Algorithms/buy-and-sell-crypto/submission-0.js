class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0;
        let buy = Infinity;


        // 1. brute-force
        // we get i element and go via all next j elements to figure out better diff  
        // save the max result
        // space: O(1)
        // time: O(nˆ2)

        // 2. wlak via elements, try to find smaller buy price, on every step, 
        // if price hight - check for diff to find max
        // space: O(1)
        // time: O(n)

        for(let i = 0; i < prices.length; i++) {
            buy = Math.min(buy, prices[i]);
            if(buy > prices[i]) {
                buy = prices[i]
            } else {
                res = Math.max(res, prices[i] - buy)
            }

        }

        return res;
    }
}
