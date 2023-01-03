// constants
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    if (!this.isEmpty()) return this.items.pop;
    return "Underflow";
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const EXPRESSION = [
  "8",
  "1",
  "-",
  "3",
  "+",
  "6",
  "*",
  "3",
  "7",
  "+",
  "2",
  "*",
  "3",
  "^",
  "3",
  "*",
  "-",
];

console.log(EXPRESSION);
