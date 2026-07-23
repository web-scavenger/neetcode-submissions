class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = []

        const backtrack = (set, index) => {

            if(index === nums.length) {
                res.push(set)

                return
            }

            backtrack([...set, nums[index]], index+1)
            backtrack(set, index+1)
        }

        backtrack([], 0)

        return res


        
    }
}
