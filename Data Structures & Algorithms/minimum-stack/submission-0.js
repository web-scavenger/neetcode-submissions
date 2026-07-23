class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = []
    }

    getLast(arr) {
        return arr[arr.length - 1]
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        const min = Math.min(
             val,
            this.minStack.length === 0
            ? val
            : this.getLast(this.minStack)
        )
        this.minStack.push(min)
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.getLast(this.stack)
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.getLast(this.minStack)
    }
}
