class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // 1. brute-force
        // walk via array, get element and calcuate days walinkg via same array one more time
        // space: O (n)
        // time: O(nˆ2)

        const res = new Array(temperatures.length).fill(0)
        const stack = [];

        for(let i = 0; i < temperatures.length; i++) {
            const c = temperatures[i];

            while(stack.length && temperatures[stack[stack.length - 1]] < c) {
                const ind = stack.pop();
                res[ind] = i - ind
            }

            stack.push(i)
        }

        return res
    }
}
