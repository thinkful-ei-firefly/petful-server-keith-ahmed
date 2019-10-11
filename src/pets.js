class _Node {
  constructor(value) {
    this.name = value.name;
    this.imgURL = value.imgURL;
    this.imgDesc = value.imgDesc;
    this.sex = value.sex;
    this.age = value.age;
    this.breed = value.breed;
    this.story = value.story;
    this.next = null;
    this.prev = null;
  }
}
//value for node is an abject with name, imgURL, imgDesc, sex, age, breed, and story
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(value) {
    const node = new _Node(value);

    if (this.first === null) {
      this.first = node;
      node.prev = null;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make the new node the last item on the queue
    node.prev = this.last;
    this.last = node;
  }
  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (this.first) this.first.prev = null;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return {
      name: node.name,
      age: node.age,
      sex: node.sex,
      breed: node.breed,
      story: node.story,
      imgURL: node.imgURL,
      imgDesc: imgDesc
    };
  }
  print() {
    let node = this.first;
    while (node !== null) {
      console.log(node);
      node = node.next;
    }
  }
  getNext(name) {
    if (!name) {
      return this.first;
    } else {
      let node = this.first;
      while (node !== null) {
        if ((node.name = name && node.next)) {
          return node.next;
        }
      }
      return null
    }
  }
}

module.exports = Queue;
