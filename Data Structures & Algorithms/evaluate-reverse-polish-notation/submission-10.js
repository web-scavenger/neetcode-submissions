class Solution {

    isOperator(e) {
        return ['+', '-', '*', '/'].includes(e)
    }

    calculate(a, b, operator) {
        a = Number(a);
        b = Number(b);

        switch(operator) {
            case '-':
                return b - a;
            case '+':
                return b + a;
            case '*': 
                return b * a;
            case '/':
                return Math.trunc(b / a);
            default:
                throw new Error('Unknown operator!')
        }
    }
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for(let i = 0; i < tokens.length; i++) {
            const e = tokens[i];

            if(this.isOperator(e)) {
                const a = stack.pop();
                const b = stack.pop();

                const res = this.calculate(a, b, e)
                stack.push(res)
            } else {
                stack.push(e)
            }
        }

        const resI = stack.length - 1;
        return stack[resI]

    }
}
