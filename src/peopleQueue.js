class _Node {
  constructor(name) {
    this.name = name;
    this.next = null;
    this.prev = null;
  }
}
//value for node is an object with name, id
class People {
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
    if (this.first) this.first.prev = null
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return {
      name: node.name
    };
  }
  print(){
    let node = this.first
    while(node !== null){
      console.log(node)
      if(node.next){
        node = node.next
      } else {
        node = null
      }
    }
  }
  placeInList(name){
    if(this.first.name === name){
      return 1
    } else {
      let node = this.first.next
      let i = 1
      while(node.name !== name && node.next !== null){
        i++
        node = node.next
      }
      return i
    }
  }
  length(){
    let node = this.first
    let i = 1
    while (node !== null){
      i++
      node = node.next
    }
    return i
  }
}

module.exports = People
