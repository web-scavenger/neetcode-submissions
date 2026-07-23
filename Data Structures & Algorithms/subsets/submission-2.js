class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = []

        const backtrack = (set, index) => {

            if(index === nums.length) {
                res.push([...set])
                return
            }

            set.push(nums[index])
            backtrack(set, index+1)
            set.pop()
            backtrack(set, index+1)
        }

        backtrack([], 0)

        return res


        
    }
}
