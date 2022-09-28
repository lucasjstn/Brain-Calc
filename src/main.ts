let person: object; 
//if i declare person like that it will allow i lately assign an empty array to this object this is not good
person = {
  name: "Lucas",
  age: 23,
};

person = [];
console.log(person);
