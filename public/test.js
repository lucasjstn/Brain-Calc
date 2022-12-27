"use strict";
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

  peek() {
    return this.items[this.items.length - 1];
  }

  clean() {
    this.items = [];
  }
}

// o padrão obrigatório será sempre um elemento e logo após um sinal, terminando em um elemento
// const expression = "57/3+5+(9*3)";
// const expression = "(5*4+3*2)-1";
const expression = "(8-1+3)*6-((3+7)*2)";
// const expression = "9*3+8*7";
// const a = eval(expression);

// console.log(a);

const main = untangled(expression);
console.log(main);

let stack = new Stack();
let queue = new Queue();

console.log(main);

for (let index = 0; index < main.length; index++) {
  // console.log("i:", index);
  //ver se é um simbolo
  if (isOperator(main[index])) {
    // console.log("é");
    if (main[index] == ")") {
      // console.log("opa");
      // console.log(main[index]);
      // console.log(stack.peek());
      // console.log(stack.items.length);

      for (let jindex = stack.items.length - 1; jindex >= 0; jindex--) {
        // console.log(stack.items[jindex], index);
        if (stack.items[jindex] !== "(" && stack.items[jindex] !== ")") {
          // console.log();
          queue.enqueue(stack.items[jindex]);
        }
      }
      stack.clean();
    } else {
      if (stack.peek() && stack.peek() !== "(") {
        // console.log("ver precedencia", stack.peek(), main[index]);
        // console.log(precedenceChecker(stack.peek(), main[index]));
        if (precedenceChecker(stack.peek(), main[index])) {
          queue.enqueue(precedenceChecker(stack.peek(), main[index]));
          stack.pop();
        }
      }
    }
    stack.push(main[index]);
  }
  //não é simbolo
  else {
    queue.enqueue(main[index]);
  }
  // se nao for um simbolo vai ter que vim pra outra lógica
  // console.log(Boolean(stack.peek()));
  if (index == main.length - 1) {
    // console.log(stack);
    for (let jindex = stack.items.length - 1; jindex >= 0; jindex--) {
      // console.log(stack.items[jindex], index);
      if (stack.items[jindex] !== "(" && stack.items[jindex] !== ")") {
        // console.log();
        queue.enqueue(stack.items[jindex]);
      }
    }
  }
  console.log("stack:", stack.items);
  console.log("queue: ", queue.items);
}

// for (let index = 0; index < 4; index++) {
//   console.log("\nprocedimento: ", index + 1);

//   //1st
//   if (isOperator(main[index])) {
//     console.log("1 => sinal ou numero = sinal", main[index]);

//     //2 passo => st
//     if (stack.peek()) {
//       console.log("2 passo =>  se tem sinal", stack.peek());
//       if (precedenceChecker(stack.peek(), main[index])) {
//         console.log(
//           "3 passo => precedencia: ",
//           precedenceChecker(stack.peek(), main[index])
//         );
//         queue.enqueue(stack.peek());
//         stack.pop();
//       }
//     }
//     //2 passo => st
//     else {
//       console.log("2 passo =>  se tem sinal", Boolean(stack.peek()));
//     }

//     stack.push(main[index]);
//     //1st
//   } else {
//     console.log("1 => sinal ou numero = numero", main[index]);
//     queue.enqueue(main[index]);
//   }

//   console.log("fila: ", queue.items);
//   console.log("pilha: ", stack.items);
// }

// console.log(precedenceChecker("+", "("));

function precedenceChecker(firstOperator = "+", secondOperator = "*") {
  // verificar a precedencia dos sinais
  const p = {
    // "(": -1,\
    "+": 0,
    "-": 1,
    "*": 2,
    "/": 3,
    "^": 4,
  };

  return p[firstOperator] >= p[secondOperator] ? firstOperator : false;
}

//verificar se é sinal ou numero
function isOperator(element) {
  const pattern = /[*\+\-\/\(\)]/;
  return pattern.test(element);
}
//separar tudo
function untangled(object) {
  // console.log("untangling");
  const a = separateVariables(object);
  const b = cleanWhiteSpaces(a);
  return b;
}
//separar as variaveis e sinais em uma array
function separateVariables(object) {
  return object.split(/([)(/*+-])/g);
}
//limpar os espaços em branco que os paranteses deixam
function cleanWhiteSpaces(object) {
  return object.filter(function (element) {
    return element !== "";
  });
}
