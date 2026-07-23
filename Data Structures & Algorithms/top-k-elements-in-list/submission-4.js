class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // brute-force
        // can create map of elements  with counter by iteration via all elements
        // then sort by counter and create array from keys
        // return sliced array
        // time: O (n + mlogm)
        // space: O (n + m)

        // buckets
        // create map<key, count>   
        // create bucket with length nums.length and fill []
        // iterate via map and push key to bucket to index = count
        // iterate via bucket from right to left and push to res array element from every bucket while size <= k
        // time: O (n * k)
        // space: O (n + m)

        const counterMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            counterMap.set(nums[i], (counterMap.get(nums[i]) || 0) + 1);
        }

        const buckets = Array.from({ length: nums.length }, () => []);

        for (const [key, count] of counterMap) {
            buckets[count - 1].push(key);
        }

        const res = [];

        for (let i = buckets.length - 1; i >= 0; i--) {

            for (let j = 0; j < buckets[i].length; j++) {
            if (res.length === k) {
                return res;
            }

            res.push(buckets[i][j]);
            }
        }

        return res;

    }
}
