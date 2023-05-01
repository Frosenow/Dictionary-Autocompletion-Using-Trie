// A node class that represents each character in the prefix hash tree
class PrefixHashTreeNode {
  value: string; // The value of the character stored in the node
  isEnd: boolean; // Indicates if the node represents the end of a word
  children: Map<string, PrefixHashTreeNode>; // A map of child nodes with keys as characters and values as PrefixHashTreeNode objects
  count: number; // Keeps track of the number of times a character is added to the tree

  constructor(value: string) {
    this.value = value;
    this.isEnd = false;
    this.children = new Map();
    this.count = 0;
  }
}

// The main class representing the prefix hash tree
export default class PrefixHashTree {
  root: PrefixHashTreeNode; // The root node of the tree

  constructor() {
    this.root = new PrefixHashTreeNode("");
  }

  // Inserts a word into the tree
  insert(word: string): void {
    let node: PrefixHashTreeNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      // If the character is not already in the tree, add it to the children map
      if (!node.children.has(char)) {
        node.children.set(char, new PrefixHashTreeNode(word.substring(0, i + 1)));
      }
      node = node.children.get(char)!; // Move to the child node
      node.count++; // Increment the count for the character
    }
    node.isEnd = true; // Mark the end of the word
  }

  // Returns an array of all words in the tree with a given prefix
  autocomplete(prefix: string): string[] {
    let res: string[] = [];
    let node: PrefixHashTreeNode = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      // If the character is in the tree, move to the child node
      if (node.children.has(char)) {
        node = node.children.get(char)!;
      } else {
        // If the character is not in the tree, return an empty array
        return res;
      }
    }
    this.helper(node, res);
    return res;
  }

  // A recursive helper function that adds all words with a given prefix to an array
  helper(node: PrefixHashTreeNode, res: string[]): void {
    if (node.isEnd) {
      // If the node represents the end of a word, add it to the result array
      res.push(node.value);
    }
    for (let child of node.children.values()) {
      // Recursively call the helper function for each child node
      this.helper(child, res);
    }
  }
}
