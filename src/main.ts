
const display: any = document.getElementById("display"); //declared as any to get rid of the error alert

console.log(display);

function writeOnDisplay(item?: string) {
  display.value += item;
}

function clearDisplay() {
  display.value = "";
}
