class TrieNode {
    constructor(c) {
        this.data = c;
        this.isEnd = false;
        this.children = new Map();
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode("");
    }
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode(char));
            }
            node = node.children.get(char);
        }
        node.isEnd = true;
    }
    autocomplete(word) {
        let res = [];
        let node = this.root;
        for (let char of word) {
            if (node.children.has(char)) {
                node = node.children.get(char);
            }
            else {
                return res;
            }
        }
        this.helper(node, res, word.substring(0, word.length - 1));
        return res;
    }
    helper(node, res, prefix) {
        if (node.isEnd) {
            res.push(prefix + node.data);
        }
        for (let char of node.children.keys()) {
            this.helper(node.children.get(char), res, prefix + node.data);
        }
    }
}
const t = new Trie();
t.insert("car");
t.insert("carpet");
t.insert("java");
t.insert("javascript");
t.insert("internet");
console.log(t.autocomplete("ja"));
//# sourceMappingURL=autocomplete.js.map