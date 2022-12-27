class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  show() {
    console.log(this.items);
  }

  clean() {
    this.items = [];
  }

  dequeue() {
    this.items.shift();
  }

  printQueue() {
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i]);
    }
  }
}

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    this.items.pop();
  }

  print() {
    console.log(this.items);
  }
}

const expression = "57/3+5+(9*3)";
