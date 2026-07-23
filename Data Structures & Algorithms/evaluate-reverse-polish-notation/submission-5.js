class Solution {

    isOperator(e) {
        return ['+', '-', '*', '/'].includes(e)
    }

    calculate(a, b, operator) {
        a = Number(a);
        b = Number(b);

        switch(operator) {
            case '-':
                return a - b;
            case '+':
                return a + b;
            case '*': 
                return a * b;
            case '/':
                return Math.trunc(a / b);
            default:
                throw new Error('Unknown operator!')
        }
    }
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        // brute-force
        // walk via elements, add to stack
        // if see operator - add one more loop to make operation and pop from stack while stack is empty
        // time: O(nˆ2)
        // space: O(n);

        // stack approach:
        const stack = [];

        for(let i = 0; i < tokens.length; i++) {
            const e = tokens[i];

            if(this.isOperator(e)) {
                const a = stack.pop();
                const b = stack.pop();
                
                stack.push(this.calculate(b, a, e))
            } else {
                stack.push(e)
            }
        }

        return stack[stack.length - 1]
    }
}
