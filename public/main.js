"use strict";
let oneButton = document.getElementsByName("one-button").values;
let display = document.getElementById("output-box");
let buttons = document.getElementsByTagName("button")[1].getAttribute("id");
console.log(buttons);
function fn() {
    let display = document.getElementById("display");
    display.value = "()";
    console.log(display === null || display === void 0 ? void 0 : display.value);
}
