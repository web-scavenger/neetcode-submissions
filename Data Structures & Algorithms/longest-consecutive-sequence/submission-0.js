class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // brute-force
        // take element and try to calculate all possiable combinations

        const hashSet = new Set(nums);
        let longest = 0;


        for(let num of hashSet) {
            if(!hashSet.has(num - 1)) {
                let length = 1;
                while(hashSet.has(num + length)) {
                    length++;
                }

                longest = Math.max(longest, length)
            }
        }

        return longest
    }
}
