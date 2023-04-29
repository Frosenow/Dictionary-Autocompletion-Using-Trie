class PrefixHashTreeNode {
  value: string;
  isEnd: boolean;
  children: Map<string, PrefixHashTreeNode>;
  count: number;

  constructor(value: string) {
    this.value = value;
    this.isEnd = false;
    this.children = new Map();
    this.count = 0;
  }
}

export default class PrefixHashTree {
  root: PrefixHashTreeNode;

  constructor() {
    this.root = new PrefixHashTreeNode("");
  }

  insert(word: string): void {
    let node: PrefixHashTreeNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node.children.has(char)) {
        node.children.set(
          char,
          new PrefixHashTreeNode(word.substring(0, i + 1))
        );
      }
      node = node.children.get(char)!;
      node.count++;
    }
    node.isEnd = true;
  }

  autocomplete(prefix: string): string[] {
    let res: string[] = [];
    let node: PrefixHashTreeNode = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (node.children.has(char)) {
        node = node.children.get(char)!;
      } else {
        return res;
      }
    }
    this.helper(node, res);
    return res;
  }

  helper(node: PrefixHashTreeNode, res: string[]): void {
    if (node.isEnd) {
      res.push(node.value);
    }
    for (let child of node.children.values()) {
      this.helper(child, res);
    }
  }
}
