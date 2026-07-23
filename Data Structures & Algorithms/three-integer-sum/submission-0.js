class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // brute-force, 3 levels loop. walk for all elements and check for sum
        // space O(1)
        // time: O(nˆ3)

        // sort and two pointer that check for neighboors deps on > OR < 0
        // space O(n)
        // time: O(nˆ2)
nums.sort((a, b) => a - b);
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1;
            let r = nums.length - 1;
            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];
                if (sum > 0) {
                    r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    l++;
                    r--;
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
            }
        }
        return res;
    }
}
