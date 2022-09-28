//array of tuples
let array: [string, number][];

array = [
  ["string", 39283],
  ["another string", 23],
];

console.log(array);

//later reassign

//this will cause an error because the extra number element is not declared in the tuple
array = [
  ["string", 39283],
  ["another string", 23],
  ["string", 23, 239],
];


