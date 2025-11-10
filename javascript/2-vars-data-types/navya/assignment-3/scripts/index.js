let result = "";

// String
let str = "Hello";
result += "String Value: " + str + " — Type: " + typeof str + "<br>";

// Number
let num = 100;
result += "Number Value: " + num + " — Type: " + typeof num + "<br>";

// Boolean
let isTrue = true;
result += "Boolean Value: " + isTrue + " — Type: " + typeof isTrue + "<br>";

// Undefined
let undef;
result += "Undefined Value: " + undef + " — Type: " + typeof undef + "<br>";

// Null
let nul = null;
result += "Null Value: " + nul + " — Type: " + typeof nul + "<br>"; 

// Symbol
let sym = Symbol("id");
result += "Symbol Value: " + sym.toString() + " — Type: " + typeof sym + "<br>";

// Object
let obj = { name: "John" };
result += "Object Value: " + JSON.stringify(obj) + " — Type: " + typeof obj + "<br>";

// Display on page
document.getElementById("resultBox").innerHTML = result;
