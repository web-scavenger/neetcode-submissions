class TrieNode {
    constructor() {
        this.children = {};
        this.last = false
    }

    hasChild(letter) {
        return !!this.children[letter];
    }

    getChild (l) {
        if(!this.hasChild(l)) {
            return false
        }

        return this.children[l]
    }

    addChild(l, node) {
        this.children[l] = node
    }

    isLast() {
        return this.last;
    }

    setLast() {
        this.last = true;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let current = this.root;
        for(let i = 0; i < word.length; i++) {
            const l = word[i]
            if(!current.hasChild(l)) {
                const node = new TrieNode();
                current.addChild(l, node);
            }

            current = current.getChild(l);
        }

        current.setLast();
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let current = this.root;
        let i = 0;

        while(i < word.length) {
            const l = word[i];

            if(!current.hasChild(l) || !current) {
                return false
            }
            i++;
            current = current.getChild(l)
        }

        return current.isLast();
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let current = this.root;
        let i = 0;

        while(i < prefix.length) {
            const l = prefix[i];

            if(!current.hasChild(l) || !current) {
                return false
            }

            i++;
            current = current.getChild(l)
        }

        return true
    }
}
