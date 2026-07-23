class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {

        // target = 10, position = [4,1,0,7], speed = [2,2,1,1]
        // 1. 4 pos, 2 speed
        // need 10 - 4 -> / 2 -> 3 hours
        // 2. 1 pos, 2 speed
        // need 10 - 1 -> / 2 -> 4.5 -> 5 hours
        // 3. pos 0, 1 speed
        // need 10 - 0 -> / 1 -> 10 hours
        // 7. 7 pos, 1 speed
        // need 10 - 7 -> / 1 -> 3 hours
        // res: 3 fleet

        // 1. brute-force
        // walk via both array, take speed and position and calculate the time
        // create a map with <time, array<indexs>>
        // return map keys
        // time: O(n)
        // space: O(n)
        // NOT correct!

        // const map = new Map();

        // const length = position.length;

        // for (let i = 0; i < length; i++) {
        //     const time = Math.ceil((target - position[i]) / speed[i])
        //     map.set(time, (map.get(time) ?? 0) + 1)
        // }

        // return map.size

        const pairs = position.map((p, i) => [p, speed[i]])

        pairs.sort((a, b) => b[0] - a[0]);

        let stack = []

        for(let [p, s] of pairs) {
            stack.push((target - p) / s)

            while(stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop()
            }
        }

        return stack.length

    }
}
