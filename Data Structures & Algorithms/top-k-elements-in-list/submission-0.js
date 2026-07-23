class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};

        for (let i = 0; i < nums.length; i++) {
            const c = nums[i];

            map[c] = (map[c] || 0) + 1;
        }

        return  Object.keys(map).sort((a, b) => map[b] - map[a]).splice(0, k);
    }
}
