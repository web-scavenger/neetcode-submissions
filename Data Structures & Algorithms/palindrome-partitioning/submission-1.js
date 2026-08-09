class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        // backtracing
        // iterate via all items using index, and for each char inside, starting from this idx - 
        // we iterate using internal loop
        // check for palindrom
        // if correct -- go deeper using recur
        // space: O (n)
        // time: O(2ˆn * n)

        const res = [];
        const part = [];

        const dfs = (i) => {
            if(i >= s.length) {
                res.push([...part])
                return
            }

            for(let j = i; j < s.length; j++) {
                if(this.isPali(s, i, j)) {
                    part.push(s.substring(i, j+1))
                    dfs(j+1);
                    part.pop()
                }
            }
        }

        dfs(0)


        return res;
    }

    isPali(s, l, r) {

        while(l < r) {
            if(s[l] !== s[r]) {
                return false
            }
            l++;
            r--
        }


        return true
    }
}
