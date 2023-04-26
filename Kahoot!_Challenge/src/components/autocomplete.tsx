class TrieNode {
  data: string;
  isEnd: boolean;
  children: Map<string, TrieNode>;

  constructor(c: string) {
    this.data = c;
    this.isEnd = false;
    this.children = new Map();
  }
}

export default class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode("");
  }

  insert(word: string): void {
    let node: TrieNode = this.root;
    for (let char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode(char));
      }
      node = node.children.get(char)!;
    }
    node.isEnd = true;
  }

  autocomplete(word: string): string[] {
    let res: string[] = [];
    let node: TrieNode = this.root;
    for (let char of word) {
      if (node.children.has(char)) {
        node = node.children.get(char)!;
      } else {
        return res;
      }
    }
    this.helper(node, res, word.substring(0, word.length - 1));
    return res;
  }

  helper(node: TrieNode, res: string[], prefix: string): void {
    if (node.isEnd) {
      res.push(prefix + node.data);
    }
    for (let char of node.children.keys()) {
      this.helper(node.children.get(char)!, res, prefix + node.data);
    }
  }
}

// const t = new Trie();
// t.insert("internet");
// t.insert("car");
// t.insert("carpet");
// t.insert("java");
// t.insert("javascript");

// console.log(t.autocomplete("java"));
