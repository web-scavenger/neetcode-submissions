class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // 1. brute force. we just walk via elemnents and multyply
        // let res = []
        // for i -> nums[i] -> for j -> acc (j != i) *= nums[j] -> res[i] = acc
        // space: o(n)
        // time: O(n^2)
        // 2. suffix and preffix walk

        // let preffix = [];
        // let suffix = [];
        // let answer = [];

        // for (let i = 0; i < nums.length; i++) {
        //     const pref = i === 0 ? 1 : preffix[i - 1];
        //     const num = i === 0 ? 1 : nums[i - 1];
        //     preffix[i] = (pref * num);
        // }

        // for (let i = nums.length - 1; i >= 0; i--) {
        //     const suf = i === nums.length - 1 ? 1 : suffix[i + 1];
        //     const num = i === nums.length - 1 ? 1 : nums[i + 1];
        //     suffix[i] = (suf * num);
        // }

        // for (let i = 0; i < nums.length; i++) {
        //     answer.push(suffix[i] * preffix[i]);
        // }

        // return answer;

        let prod = 1;
        let zeroCount = 0;

        for(let num of nums) {
            if(num !== 0) {
                prod *= num
            } else {
                zeroCount++
            }
        }

        if(zeroCount > 1) {
            return Array(nums.length).fill(0)
        }

        const res = new Array(nums.length);

        for (let i = 0; i < nums.length; i++) {
            if(zeroCount > 0) {
                res[i] = nums[i] === 0 ? prod : 0
            } else {
                res[i] = prod / nums[i]
            }
        }

        return res
    }
}
