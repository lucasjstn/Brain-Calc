const OPENPARENTHESIS = "(";
const CLOSEPARENTHESIS = ")";
const PARENTHESIS = /\(|\)/;
const NUMBERPATTERN = /[0-9]/;
const EXPRESSION = "(8-1+3)*6-((3+7)*2)^3*3";
const CHARACTERSEXPRESSION = untangled(EXPRESSION);
// console.log(PARENTHESIS.test(OPENPARENTHESIS));
// console.log(PARENTHESIS.test(CLOSEPARENTHESIS));
// OPENPARENTHESIS;

for (let i = 0; i < CHARACTERSEXPRESSION.length; i++) {
  switch (CHARACTERSEXPRESSION[i]) {
    case "(":
      console.log("here");
      break;
    case isNumber(CHARACTERSEXPRESSION[i]):
      console.log("number here");
      break;
  }
}

function isNumber(number) {
  NUMBERPATTERN.test(this.number);
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
  return object.split(/([)(/*+-\^])/g);
}

//limpar os espaços em branco que os paranteses deixam
function cleanWhiteSpaces(object) {
  return object.filter(function (element) {
    return element !== "";
  });
}
