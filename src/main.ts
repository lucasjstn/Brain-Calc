const display: any = document.getElementById("display"); //declared as any to get rid of the error alert

console.log(display);

function writeOnDisplay(item?: string) {
  display.value = item + display.value; //inverting the display order because it's buggy by default
}

function clearDisplay() {
  display.value = "";
}
