class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // create set of unique nums 
        // iterate via unique array
        // to skip al possiable elements for seq - check for num - 1 existing
        // inside this iteration - use while to iterate while exist in set
        // check for longest
        // space: O (n)
        // time: O (n)

        let longest = 0;
        let numSet = new Set(nums)

        for(let num of numSet) {
            if(!numSet.has(num - 1)) {
                let count = 1;

                while(numSet.has(num + count)) {
                    count++
                }

                longest = Math.max(longest, count)
            }
        }

        return longest
    }
}
