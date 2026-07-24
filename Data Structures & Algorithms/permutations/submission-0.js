class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        // [1,2,3]  -> [[_, 2, 3] [2, _, 3], [2, _, 3], [2, 3, _], [3, _ 2], [3, 2, _]]     
        // [2, 3]  -> [[2, 3] , [3, 2]]       
        // [3] -> [[3]]      
        // [] -> [[]]  

        // time: O(n! * nˆ2)  
        // space: O(n! * n)

        if(nums.length === 0) {
            return [[]]
        }

        const perm = this.permute(nums.slice(1));
        const res = []
        
        // perm = [[3]]
        // nums = [2, 3]
        for(let p = 0; p < perm.length; p++) {
            for(let i = 0; i <= perm[p].length; i++) {
                const p_copy = [...perm[p]];
                p_copy.splice(i, 0, nums[0]);
                res.push(p_copy)
            }
        }

        return res;
        

    }
}
