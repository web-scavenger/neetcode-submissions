class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const stack = [];

        const pairs = position.map((p, index) => [p, speed[index]])

        pairs.sort((a, b) => b[0] - a[0]);

        for(let i = 0; i < pairs.length; i++) {
            const p = pairs[i][0];
            const s = pairs[i][1];
            const t = (target - p) / s;

            if(stack.length === 0 || stack[stack.length - 1] < t) {
                stack.push(t)
            }
        }

        return stack.length

    }
}