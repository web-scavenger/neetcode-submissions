class Solution {

    isOpen(e) {
        return ['(', '[', '{'].includes(e)
    }

    close = {
        '}': '{',
        ')': '(',
        ']': '['
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // brute force
        // walk via string and every time, when faced with open tag 

        // use stack to push or pop the symbol deps on type
        // time: O (n)
        // space: O(n)

        const stack = [];

        for (let i = 0; i < s.length; i++) {
            const e = s[i];

            if(this.isOpen(e)) {
                stack.push(e);
                continue;
            } 

            if(stack.length === 0) {
                return false
            }

            if(stack[stack.length - 1] !== this.close[e]) {
                return false
            }

            stack.pop()
        }

        return stack.length === 0
    }
}
