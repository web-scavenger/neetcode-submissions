class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // max amount = width * min(highest bars)
        // 1. brute-force
        // iterate via elements, and calculate max amount
        // on every iteration - run one more starting from this position
        // variable maxAmount to calculate
        // time: O(nˆ2)
        // space: O(1)

        let l = 0;
        let r = heights.length - 1
        let maxAmount = 0;

        while(l < r) {
            maxAmount = Math.max(maxAmount, Math.min(heights[l], heights[r]) * (r - l))

            if(heights[l] <= heights[r]) {
                l++
            } else {
                r--
            }

        }


        return maxAmount

    }
}
