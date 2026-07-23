class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {};

        for(let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];

            if(map[diff] !== undefined) {
                const index = map[diff]
                return [index, i]
            }

            map[nums[i]] = i
        }
    }
}
