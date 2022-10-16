const operation = "(300/90)+600*15/75"
const operationSplitted = operation.split(/[*+/-]/);
const anotherArray = []
const onlySignals = []
const aNata = []
for(let i = 0; i < operation.length; i++ ) {

  if(operation[i].match(/[*+/-]/)) {
    onlySignals.push(operation[i])
  }
}

for(let i = 0; i < operationSplitted.length; i++ ) {
  if(operationSplitted[i] != "") {
    anotherArray.push(operationSplitted[i])
  }
}

// onlySignals.shift();

console.log('cortado: ', anotherArray);

console.log('sinais: ', onlySignals);

for(let i = 0; i < anotherArray.length; i++) {
  if(anotherArray[i] !== undefined) {
    aNata.push(anotherArray[i])
    aNata.push(onlySignals[i])
  }
}


console.log('A nata: ', aNata);

// for(let i = 0; i < aNata.length; i++) {
//  if(aNata[i].split('').includes('(')){
//   console.log(aNata[i]);
  
//  }
 
  
// }

console.log('A nata: ', aNata);
