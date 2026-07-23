class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        // brute-froce
        // iterate all elements and run all other element to find duplicate
        // time: O(n^2)
        // space: O(1)

        // use set to add element and check for existing. return if exist
        // time: O (n)
        // space: O (n)


        // use elemnt like an index and set reverse state *= -1
        // if number < 1 -- return the number;
        // time: O (n)
        // space: O (1)
        
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i]

            const idx = Math.abs(num) - 1;

            if(nums[idx] < 0) {
                return Math.abs(num)
            }

            nums[idx] *= -1
        }
    }
}
