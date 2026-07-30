class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // brute
        // get element and walk via array till bigger one using internal loop
        // time: O (n^2)
        // space: 0 (1)

        // create array size temp.length and fill 0
        // create stack to push item indexs
        // while stack not empty - check stack[last] < temp[i] => res[stack[last]] = i - stack[last]
        // else push i to stack

        // res =>  [1, 4, 1, 2, 1, 0, 0]
        // temp => [30,38,30,36,35,40,28] 
        // stack =>[5, 6] 
        // time: O (n)
        // space: O(n)

        const res = new Array(temperatures.length).fill(0)
        const stack = []

        for(let i = 0; i < temperatures.length; i++) {
            
            while(stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
                const idx = stack.pop()
                res[idx] = i - idx
            }

            stack.push(i)
        }



        return res
    }
}
