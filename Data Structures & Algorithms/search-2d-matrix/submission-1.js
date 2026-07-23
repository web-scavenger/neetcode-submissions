class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // 1. brute-force
        // walk via matrix, try to find target value
        // time: O(n*m)
        // space: O(1)


        // 2. two binary searches
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        let top = 0;
        let bot = ROWS - 1;

        while(top <= bot) {
            const mid = Math.floor((top + bot) / 2);

            if(target < matrix[mid][0]) {
                bot = mid - 1;
            } else if(target > matrix[mid][COLS - 1]) {
                top = mid + 1
            } else {
                break;
            }
        }

        if (!(top <= bot)) {
            return false;
        }

        const row = Math.floor((top + bot) / 2);

        let l = 0;
        let r = COLS - 1;

        while(l <= r) {
            const mid = Math.floor((l+r) / 2);

            if(matrix[row][mid] < target) {
                l = mid + 1
            } else if(matrix[row][mid] > target) {
                r = mid - 1
            } else {
                return true
            }
        }

        return false

    }
}
