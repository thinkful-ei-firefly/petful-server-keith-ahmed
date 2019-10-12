class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(item) {
    const node = new _Node(item);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;

    node.next = null;
  }
  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }
    return node.data;
  }
}

function displayQueue(queue) {
  let currentNode = queue.first;
  while (currentNode !== null) {
    currentNode = currentNode.next;
  }
}

function peekQ(queue) {
  if (queue.first === null) {
    return null;
  }
  return queue.first.data;
}

function isEmptyQ(queue) {
  return queue.start === null;
}

module.exports = { Queue, _Node };
