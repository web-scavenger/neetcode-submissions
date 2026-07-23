class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // 1. brute-force
        // we run loop in loop and cehck for all pais, when faced the pair -- return the array
        // time: O(nˆ2)
        // space O(1)

        // 2. walk via array and cehck for existing pair
        // on every element check for existing diff
        // time: O(n)
        // space: O(n)

        // 3. two pointers and walk side by side to find the target

        let left = 0;
        let right = numbers.length - 1

        while(left < right) {
            const sum = numbers[right] + numbers[left];

            if(sum === target) {
                return [left + 1, right + 1]
            }

            if(sum > target) {
                right--
            } else {
                left++
            }
        }
    }
}
