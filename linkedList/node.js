class Node {
  constructor(dateKey = null, dataValue = null, dataNextNode = null) {
    this.key = dateKey;
    this.value = dataValue;
    this.nextNode = dataNextNode;
  }
}

export default Node;
