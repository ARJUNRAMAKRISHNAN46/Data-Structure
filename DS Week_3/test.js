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
    for(let char of word) {
      if(!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      current = current.children.get(char);
    }
    current.isEndOfWord = true;
  }

  search(word) {
    let current = this.root;
    for(let char of word) {
      if(!current.children.has(char)) {
        return false;
      }
      current = current.children.get(char);
    }
    return current.isEndOfWord;
  }

  delete(word) {
    this.deleteRecursive(this.root, word, 0);
  }

  deleteRecursive(root, word, index) {
    if(!root) {
      return null;
    }
    if(index === word.length) {
      if(root.isEndOfWord) {
      root.isEndOfWord = false;
      }
      return root.children.length === 0;
    }

    let char = word[index];
    let childNode = root.children.get(char);

    if(!childNode) {
      return false;
    }

    const shouldDeleteNode = this.deleteRecursive(childNode, word , index + 1);

    if(shouldDeleteNode) {
      root.children.delete(char);
      return root.children.length === 0;
    }
    return false;
  }

  findWordWithPrefix(prefix) {
    let current = this.root;
    for(let char of prefix) {
      if(!current.children.has(char)) {
        return [];
      }
      current = current.children.get(char);
    }

    const words = [];
    this.collectWords(current, prefix, words);
    return words;
  }

  collectWords(root, currentWord, result) {
    if(root.isEndOfWord) {
      result.push(currentWord);
    }

    for(let [char, childNode] of root.children) {
      this.collectWords(childNode, currentWord + char, result);
    }
  }
}

const trie = new Trie();

trie.insert('arjun');
trie.insert('appu');

console.log(trie.search('arjun'));
console.log(trie.search('appu'));
console.log(trie.search('something'));

console.log(trie.findWordWithPrefix('an'));