class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        // backtrack
        // iterate via combinations till open and close count eq, and close eq n
        // on each itreation if open < n -> dive with new one open
        // if open > close dive into with close
        // time: O (IDK, 2ˆn)
        // space: O(n)
        const res = []

        this.backtrack(res, 0, 0, n, '')
        return res;
    }
    backtrack (res, openN, closeN, n, cur) {
        if(openN === closeN && closeN === n) {
            res.push(cur);
            return
        }

        if(openN < n) {
           this.backtrack(res, openN + 1, closeN, n, `${cur}(`) 
        }

        if(openN > closeN) {
           this.backtrack(res, openN, closeN + 1, n, `${cur})`) 
        }

    }
}
