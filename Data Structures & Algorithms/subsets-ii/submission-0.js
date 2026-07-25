class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const res = [];

        nums.sort((a, b) => a - b)

        const backtrack = (i, subset) => {
            if(i === nums.length) {
                res.push([...subset])
                return
            }

            subset.push(nums[i])
            backtrack(i+1, subset)
            subset.pop();

            while(i < nums.length && nums[i] === nums[i+1]){
                i += 1
            }

            backtrack(i+1, subset)
        }

        backtrack(0, [])

        return res;

    }
}
