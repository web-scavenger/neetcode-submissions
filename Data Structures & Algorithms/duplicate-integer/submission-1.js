class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
    //     const exist = {};

    //     for(let i = 0; i < nums.length; i++) {
    //         if(exist[nums[i]]) {
    //             return true
    //         }

    //         exist[nums[i]] = true
    //     }

    //     return false

        return new Set(nums).size < nums.length;
    }
}
