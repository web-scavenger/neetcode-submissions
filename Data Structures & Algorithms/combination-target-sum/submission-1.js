class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];

        const dfs = (index, cur, total) => {
            if(total === target) {
                res.push([...cur])
                return
            }

            if(index >= nums.length || total > target) {
                return
            } else {
                cur.push(nums[index]);
                dfs(index, cur, total + nums[index]);
                cur.pop();
                dfs(index+1, cur, total)
            }
        }

        dfs(0, [], 0);
        return res
    }
}
