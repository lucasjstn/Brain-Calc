let oneButton = document.getElementsByName("one-button").values;
// let display = document.getElementById("output-box");
let buttons = document.getElementsByTagName("button")[1].getAttribute("id");
const display: any = document.getElementById("display");
const mantica = display.value;
let arrayOfValues: object = [];
// console.log(buttons);

//this functions reveives a string and sums it to the display content and then
function writeOnDisplay(num?: string | number) {
  display.value = num + display.value;
  arrayOfValues = display.value.split("");
}

function calc() {
  let array: string = arrayOfValues.reverse().join("");
  let arrayCutted: string[] = array.split("+");

  let last: number = 0;
  for (let i: number = 0; i < arrayCutted.length; i++) {
    // console.log(parseInt(arrayCutted[i]));
    last += parseInt(arrayCutted[i]);
  }

  const result: string[] = last.toString().split("");
  console.log(typeof result.reverse().join(""));
  display.value = result.reverse();
  // console.log("tamanho da array:", arrayCutted.length);

  // console.log(array.split("+"));
}

function clearDisplay() {
  if (display.value) {
    display.value = "";
  }
}
