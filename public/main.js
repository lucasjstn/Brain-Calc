"use strict";
let oneButton = document.getElementsByName("one-button").values;
// let display = document.getElementById("output-box");
let buttons = document.getElementsByTagName("button")[1].getAttribute("id");
const display = document.getElementById("display");
const mantica = display.value;
let arrayOfValues = [];
// console.log(buttons);
function fn(num) {
    display.value = num + display.value;
    arrayOfValues = display.value.split("");
    // console.log(arrayOfValues.reverse());
    // console.log(arrayOfValues.join(""));
    // console.log(display.value);
}
function calc() {
    let array = arrayOfValues.reverse().join("");
    let arrayCutted = array.split("+");
    const sum1 = parseInt(arrayCutted[0]);
    console.log(sum1);
    console.log(array.split("+"));
}
function clearDisplay() {
    if (display.value) {
        display.value = "";
    }
}
