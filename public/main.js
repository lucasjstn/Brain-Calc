"use strict";
let oneButton = document.getElementsByName("one-button").values;
// let display = document.getElementById("output-box");
let buttons = document.getElementsByTagName("button")[1].getAttribute("id");
const display = document.getElementById("display");
const mantica = display.value;
let arrayOfValues = [];
// console.log(buttons);
//this functions reveives a string and sums it to the display content and then
function writeOnDisplay(num) {
    display.value = num + display.value;
    arrayOfValues = display.value.split("");
}
function writeResultOnDisplay() {
    let array = arrayOfValues.reverse().join("");
    let arrayCutted = array.split("+");
    let last = 0;
    for (let i = 0; i < arrayCutted.length; i++) {
        // console.log(parseInt(arrayCutted[i]));
        last += parseInt(arrayCutted[i]);
    }
    const result = last.toString().split("");
    console.log(result.join(""));
    display.value = result.reverse().join("");
    // console.log("tamanho da array:", arrayCutted.length);
    // console.log(array.split("+"));
}
function clearDisplay() {
    if (display.value) {
        display.value = "";
    }
}
