import Node from '../LinkedList/node.js';
class LinkedList {
  constructor(headNode = null) {
    this.headNode = headNode;
    this.listSize = 0;
  }

  append(key, value) {
    let newNode = new Node(key, value);

    //if list is empty or headNode is null
    if (this.headNode === null) {
      this.headNode = newNode;
      this.listSize++;
      return;
    }

    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }

    current.nextNode = newNode;
    this.listSize++;
    return;
  }

  prepend(value) {
    this.headNode = new Node(value, this.headNode);
    this.listSize++;
  }

  size() {
    return this.listSize;
  }

  head() {
    return this.headNode;
  }

  tail() {
    let current = this.headNode;

    while (current && current.nextNode) {
      current = current.nextNode;
    }

    return current;
  }

  at(index) {
    let current = this.headNode;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }

    return current;
  }

  pop() {
    // remove last element and save it in order to return
    let current = this.headNode;
    if (!current) {
      return null;
    } else if (!current.nextNode) {
      const value = current.value;
      current = null;
      this.size--;
      return value;
    } else {
      current = this.headNode;
      let previous = null;
      while (current.nextNode) {
        previous = current;
        current = current.nextNode;
      }
      previous.nextNode = null;
      this.size--;
      return current.value;
    }
  }

  find(value) {
    let current = this.headNode;

    for (let index = 0; index < this.size(); index++) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
    }

    return null;
  }

  toString() {
    let result = '';

    let current = this.headNode;

    while (current) {
      result += `(${current.value}) ->`;

      current = current.nextNode;
    }

    result += 'null';

    return result;
  }
}

export default LinkedList;
