class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // the count is bigest gap * the biggest number but to get bigger result
        // for example
        // [1,7,2,5,4,7,3,6]
        // 7 [1i] and 6[7i]
        // 6 is height
        // 7 - 1 (path) = 6
        // res: 6 * 6 = 36;

        // 1. brute-force
        // double loop, and variable to calculate max combination
        // time: O(n^2)
        // space: O(1)
        
        // two pointers
        // left and right pointer, variable to calculate max amount
        // time: O(n)
        // space: O(1)

        let l = 0;
        let r = heights.length - 1;
        let maxA = 0

        while(l < r) {
            const leftB = heights[l];
            const rightB = heights[r];
            const m = Math.min(leftB, rightB)

            maxA = Math.max(maxA, (r - l) * m)

            if(leftB < rightB) {
                l++
            } else {
                r--
            }

        }

        return maxA
    }
}
