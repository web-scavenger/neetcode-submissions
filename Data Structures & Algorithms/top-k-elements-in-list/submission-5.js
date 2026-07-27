class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // 1. sorting
        // iterate nums, create Map <key, counter>
        // sort by counter value. return slice of keys
        // Time: O(n log n)
        // space: O(n)

        // 2. buckets
        // create Map<key, counter>
        // create bucket size nums.length, fill empty arrays
        // walk via map and and push key by size -> index
        // iterate via bucket and return while k < 0;
        // time: O(n)
        // space: O(n)

        const count = {};
        const freq = Array.from({ length: nums.length + 1 }, () => []);

        for (const n of nums) {
            count[n] = (count[n] || 0) + 1;
        }
        for (const n in count) {
            freq[count[n]].push(parseInt(n));
        }

        const res = [];

        for(let i = freq.length - 1; i >= 0; i--) {
            for (const n of freq[i]) {
                res.push(n);
                if (res.length === k) {
                    return res;
                }
            }
        }

        

    }
}
