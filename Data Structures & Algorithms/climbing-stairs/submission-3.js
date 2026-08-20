class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        
        // const dfs = (i) => {
        //     if(i >= n) return i === n

        //     return dfs(i + 1) + dfs(i + 2)
        // }

        // return dfs(0)

                if (n <= 2) {
            return n;
        }
        let dp = new Array(n + 1).fill(0);
        dp[1] = 1;
        dp[2] = 2;
        for (let i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    }
}
