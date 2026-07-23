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

        // DP
        // variables: 
        // profit = 0
        // min = Infinity 
        // for loop via prices
        // min = Min(min, p[i])
        // profit = max(profit, p[i] - min)
        // time: O(n)
        // space: O(1)

        // let profit = 0;
        // let buy = Infinity;

        // for(let i = 0; i< prices.length; i++) {
        //     profit = Math.max(profit, prices[i] - buy);
        //     buy = Math.min(buy, prices[i]);
        // }

        // return profit

        // two pointers
        // i have two pointer
        // profir variable
        // iterate while right < p.length
        // if left > right -> l++
        // else max(rigth - left, profit)
        // always move right to end 
        // time: O(n)
        // space: O(1)

        let l = 0;
        let r = 0;
        let profit = 0;

        while(r < prices.length) {
            if(prices[l] > prices[r] && l < r) {
                l++
                continue
            } else {
                profit = Math.max(profit, prices[r] - prices[l])
            }
            r++
        }

        return profit

    }
}
