class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // brute 
        // iterate all elements and find the target
        // space: O(1)
        // time: O(n)

        // binary search
        // time : O(log n)
        // space: O(1)
        
        // if [mid] >= [l] // 3,4,5,6,1,2
        //  tar > mid || tar < l
        //   l = mid + 1
        //  else
        //    r = mid - 1
        // else  // 5, 6, 1, 2, 3, 4
        //  tar > mid => l = mid + 1
        //  tar < r => l = mid + 1
        //  else => r = mid - 1 


        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if (target === nums[mid]) {
                return mid;
            }

            if (nums[l] <= nums[mid]) {
                if (target > nums[mid] || target < nums[l]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            } else {
                if (target < nums[mid] || target > nums[r]) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            }
        }
        return -1;
        
  
    }
}
