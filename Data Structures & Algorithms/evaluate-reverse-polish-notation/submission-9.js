class Solution {
    isOperator(e) {
        return ['+', '-', '/', '*'].includes(e)
    }

    calculate(a, b, operator) {
        switch (operator) {
            case '+':
                return b + a;
            case '-':
                return b - a;
            case '*':
                return b * a;
            case '/':
                return Math.trunc(b / a);
            default:
                throw new Error('Unknown operator')
        }
    }

    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        // create a stack
        // iterate via tokens elems
        // check for number or operator
        // if number -- push to stack
        // if operator - pop form stack a and b
        // calute the result
        // push to stack result
        // time: O(n)
        // space: O(n)

        const stack = [];

        for(let i = 0; i < tokens.length; i++) {
            const e = tokens[i];

            if(this.isOperator(e)) {
                const a = stack.pop();
                const b = stack.pop();

                stack.push(this.calculate(a, b, e))
            } else {
                stack.push(Number(e))
            }
        }

        return stack[stack.length - 1]
    }
}
