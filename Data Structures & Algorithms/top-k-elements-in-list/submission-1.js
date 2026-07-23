class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // const map = {};

        // for (let i = 0; i < nums.length; i++) {
        //     const c = nums[i];

        //     map[c] = (map[c] || 0) + 1;
        // }

        // return  Object.keys(map).sort((a, b) => map[b] - map[a]).splice(0, k);

        const freq = new Map()

        for (let i = 0; i < nums.length; i++) {
            freq.set(nums[i], (freq.get(nums[i]) ?? 0) + 1);
        }

        const buckets = Array.from({ length: nums.length + 1 }, () => []);

        for (const [num, count] of freq) {
            buckets[count].push(num);
        }

        let result = []
        for(let count = buckets.length - 1; count >= 0; count--) {
            for(let key of buckets[count]) {
                result.push(key)

                if(result.length === k) {
                    return result
                }
            }
        }

        return result

    }
}
