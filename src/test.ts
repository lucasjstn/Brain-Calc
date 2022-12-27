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

// o padrão obrigatório será sempre um elemento e logo após um sinal, terminando em um elemento
const expression = "57/3+5+(9*3)";
console.log(expression);

// console.log(expression);
console.log(untangle(expression));

//verificar se é sinal ou numero
function isSignal(element) {
    const pattern = /[*\+\-\/\(\)]/;
    return pattern.test(element);
}

//separar tudo
function untangle(object) {
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
