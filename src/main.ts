let oneButton = document.getElementsByName("one-button").values;
// let display = document.getElementById("output-box");
let buttons = document.getElementsByTagName("button")[1].getAttribute("id");
const display: any = document.getElementById("display");
const mantica = display.value;
let arrayOfValues: object = [];
// console.log(buttons);

function fn(num?: string | number) {
  display.value = num + display.value;
  arrayOfValues = display.value.split("");
  // console.log(arrayOfValues.reverse());
  // console.log(arrayOfValues.join(""));
  // console.log(display.value);
}

function calc() {
  let array: string = arrayOfValues.reverse().join("");
  let arrayCutted: object = array.split("+");
  const sum1: number = parseInt(arrayCutted[0]);

  console.log(sum1);
  console.log(array.split("+"));
}

function clearDisplay() {
  if (display.value) {
    display.value = "";
  }
}
