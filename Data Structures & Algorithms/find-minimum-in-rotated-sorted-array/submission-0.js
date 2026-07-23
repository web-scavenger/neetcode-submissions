class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // brute-force
        // walk via all elements in arr
        // find min
        // space O(1)
        // time: O(n)

        // binary search
        // walk via l, mid and r
        // compare mid and r elems
        // if mid < r -- sorted
        // space: O(1)
        // time: O(log n)

        let left = 0;
        let right = nums.length - 1;

        while(left < right) {
            const mid = Math.floor((left + right) / 2)

            if(nums[mid] > nums[right]) {
                left = mid + 1
            } else {
                right = mid
            }
        }

        return nums[left];
    }
}
