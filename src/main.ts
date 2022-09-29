let oneButton = document.getElementsByName("one-button").values;
// let display = document.getElementById("output-box");
let buttons = document.getElementsByTagName("button")[1].getAttribute("id");
const display: any = document.getElementById("display");
const mantica = display.value;

console.log(buttons);

function fn(num?: string | number) {
  display.value = num + display.value;
  let arrayOfValues = display.value.split("");
  console.log(arrayOfValues);
  console.log(display.value);
}

function clearDisplay() {
  if (display.value) {
    display.value = "";
  }
}
