// constants
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  last() {
    return Number(this.items[this.size() - 1]);
  }

  penultimate() {
    return Number(this.items[this.size() - 2]);
  }

  removeFirst() {}
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
  let lastResult = 0;
  //if the given list is empty the sum will be equal to 0
  if (exp.length === 0) return 0;
  //for each element inside an array make a process
  for (let i = 0; i < exp.length; i++) {
    let result = 0;
    switch (true) {
      //tests if its a number
      case isNumber.test(exp[i]):
        // console.log("number");
        evalStack.push(exp[i]);
        // console.log(evalStack.items);
        break;
      // tests if its a operator
      case isOperator.test(exp[i]):
        // console.log("operator");
        result = operations[exp[i]](evalStack.penultimate(), evalStack.last());
        // console.log(
        //   operations[exp[i]](evalStack.penultimate(), evalStack.last())
        // );
        evalStack.pop();
        evalStack.pop();
        evalStack.push(result);
        // evalStack.pop();
        // console.log(evalStack.pop());
        break;
    }

    if (i == exp.length - 1) {
      return result;
    }
  }
}

const operations = {
  "+": (number1, number2) => {
    return number1 + number2;
  },
  "-": (number1, number2) => {
    return number1 - number2;
  },
  "*": (number1, number2) => {
    return number1 * number2;
  },
  "/": (number1, number2) => {
    return number1 / number2;
  },
  "^": (number1, number2) => {
    return Math.pow(number1, number2);
  },
};

// console.log(Math.pow(3, 2));
// console.log(operations["+"](2, 3));
console.log(Evaluating(EXPRESSION));
