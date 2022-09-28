"use strict";
// correct form of using union pipe in arrays
let array;
array = ["lucas", 394];
array.push("lucas");
console.log(array);
array.push(true);
//it will generate an js file but ts file will complain
