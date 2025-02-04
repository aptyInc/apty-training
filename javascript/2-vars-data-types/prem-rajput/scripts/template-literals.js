var myString = "Hello";
var myNumber = 23;
var myBoolean = true;
var myUndefined;
var myNull = null;
var mySymbol = Symbol("unique");
var myObject = { name: "Prem Rajput", age: 24 };

document.getElementById("string-result").innerText = `String: ${myString}`;

document.getElementById("number-result").innerText = `Number: ${myNumber}`;

document.getElementById("boolean-result").innerText = `Boolean: ${myBoolean}`;

document.getElementById("undefined-result").innerText = `Undefined: ${myUndefined}`;

document.getElementById("null-result").innerText = `Null: ${myNull}`;

document.getElementById("symbol-result").innerText = `Symbol: ${mySymbol.toString()}`;

document.getElementById("object-result").innerText = `Object: ${JSON.stringify(myObject)}`;