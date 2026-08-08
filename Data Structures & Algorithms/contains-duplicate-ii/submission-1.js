class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        if(k === 0) {
            return false
        }
        const visited = new Set()

        for(let i = 0; i < nums.length; i++) {
            if(visited.has(nums[i])) {
                return true
            }

            if(visited.size >= k) {
                visited.delete(nums[i - k])
            }

            visited.add(nums[i])
        }


        return false
    }
}
