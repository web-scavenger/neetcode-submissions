class Solution {

    digitToChar = {
            2: 'abc',
            3: 'def',
            4: 'ghi',
            5: 'jkl',
            6: 'mno',
            7: 'qprs',
            8: 'tuv',
            9: 'wxyz',
        };
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        // create numbers map
        // use backtrack to build step by step res string moving by 1 iteration
        // on each step - run loop for all symbols for digit
        // time: O(n * 4^n) 
        // space: O(n)
        if(digits.length === 0) {
            return []
        }

        const res = [];

        const backtrack = (idx, cur) => {
            if(cur.length === digits.length) {
                res.push(cur)
                return
            }

            for(let c of this.digitToChar[digits[idx]]) {
                backtrack(idx + 1, `${cur}${c}`)
            }
        }

        backtrack(0, '')

        return res;
    }
}
