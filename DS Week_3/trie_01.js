class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;
    for (const char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      current = current.children.get(char);
    }
    current.isEndOfWord = true;
  }

  search(word) {
    let current = this.root;
    for (const char of word) {
      if (!current.children.has(char)) {
        return false;
      }
      current = current.children.get(char);
    }
    return current.isEndOfWord;
  }

  delete(word) {
    this.deleteRecursive(this.root, word, 0);
  }

  deleteRecursive(node, word, index) {
    if (!node) {
      return;
    }

    if (index === word.length) {
      if (node.isEndOfWord) {
        node.isEndOfWord = false;
      }
      return node.children.length === 0;
    }

    const char = word[index];
    const childNode = node.children.get(char);

    if (!childNode) {
      return false;
    }

    const shouldDeleteNode = this.deleteRecursive(childNode, word, index + 1);

    if (shouldDeleteNode) {
      node.children.delete(char);
      return node.children.length === 0;
    }

    return false;
  }

  getWordsWithPrefix(prefix) {
    let current = this.root;

    for (let char of prefix) {
      if (!current.children.has(char)) {
        return [];
      }
      current = current.children.get(char);
    }

    const words = [];
    this.collectWords(current, prefix, words);

    return words;
  }

  collectWords(node, currentWord, result) {
    if (node.isEndOfWord) {
      result.push(currentWord);
    }

    for (let [char, childNode] of node.children) {
      this.collectWords(childNode, currentWord + char, result);
    }
  }
}

const trie = new Trie();

trie.insert("apple");
trie.insert("app");
console.log(trie.search("apple"));
console.log(trie.search("app"));
console.log(trie.search("ap"));

trie.delete("app");
console.log(trie.search("apple"));
console.log(trie.search("app"));
