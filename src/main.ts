const display: any = document.getElementById("display"); //declared as any to get rid of the error alert

enum MathSymbols { //this enum is created to facilitate the process of distinguishing math symbols
  ADDITTION = "+",
  SUBTRACTION = "-",
  PRODUCT = "*",
  QUOCIENT = "/",
}

let arrayOfValues: string[] = []; //declaring this array of string to receive further the items unraveled by the split method

function writeOnDisplay(item: string) {
  display.value = item + display.value; //inverting the display order because it's buggy by default
  arrayOfValues = display.value.split("").reverse(); // spliting display.value in an array, after reversing it and then joining them |> older comment: values = [32+32+12] after ["3", "2", "+", "3", "2", "1", "2"]
}

function writeResultOnDisplay() {
  let array: string[] = arrayOfValues.join("").split(""); //creating an array again dont know why
  let indexOfAddition = array.indexOf("-");
  console.log("index of indexOfAddition: ", indexOfAddition);
  // console.log(array);
  // console.log("index of the plus sign: ", array.indexOf("+")); //if not found returns -1
  // console.log(arrayOfValues.join("").split("+"));
  // console.log(array.length);
  console.log(array); // [ "3", "0", "+", "1", "0" ]
  console.log("getting the item before the first plus sign", array.slice(0, indexOfAddition).join("")); // [ "3", "0" ], after join |> '30 //[ "1", "0", "0", "+", "2", "2", "2" ] => '100'
  console.log("getting the item after the first plus sign", array.slice(indexOfAddition+1, array.length).join(""));
  // console.log(arrayOfValues);
}

function clearDisplay() {
  //function to,
  display.value = "";
}
