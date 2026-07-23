class Node {
    constructor(key, value) {
        this.value = value;
        this.key = key;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.tail = new Node(0,0);
        this.head = new Node(0,0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    insert(node) {
        const prev = this.tail.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.tail;
        this.tail.prev = node;
    }

    remove(node) {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.map.has(key)) {
            return -1;
        }

        const node = this.map.get(key);
        this.remove(node);
        this.insert(node);

        return node.value
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)) {
            this.remove(this.map.get(key))
        }

        const node = new Node(key, value);
        this.map.set(key, node);
        this.insert(node);

        if(this.map.size > this.capacity) {
            const lru = this.head.next;
            this.remove(lru);
            this.map.delete(lru.key)
        }
    }
}
