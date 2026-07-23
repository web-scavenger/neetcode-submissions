class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const res = [];
        candidates.sort((a, b) => a -b)

        const dfs = (idx, cur, total) => {
            if(total === target) {
                res.push([...cur])
                return
            }

            for(let i = idx; i < candidates.length; i++) {
                if(i > idx && candidates[i] === candidates[i-1]) {
                    continue
                }

                if(total + candidates[i] > target) {
                    break
                }

                cur.push(candidates[i])
                dfs(i + 1, cur, total + candidates[i])
                cur.pop()
            }

        }

        dfs(0, [], 0)
        
        return res
    }
}
