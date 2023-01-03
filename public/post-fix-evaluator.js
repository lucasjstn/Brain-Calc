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
const isNumber = /[0-9]/;
const isOperator = /[+*-/^]/;
// console.log(isNumber.test(2));

//List of Characters -> Number
function Evaluating(exp) {
  //creates the evaluating stack
  let evalStack = new Stack();

  //if the given list is empty the sum will be equal to 0
  if (exp.length === 0) return 0;
  //for each element inside an array make a process
  for (let i = 0; i < exp.length; i++) {
    // console.log(exp[i], i);
    // console.log();
    switch (true) {
      //tests if its a number
      case isNumber.test(exp[i]):
        console.log("number");
        break;
      // tests if its a operator
      case isOperator.test(exp[i]):
        console.log("operator");
        break;
    }
  }
}

console.log(Evaluating(EXPRESSION));
