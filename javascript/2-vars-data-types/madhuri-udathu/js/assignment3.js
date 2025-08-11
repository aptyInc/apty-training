const outputDiv = document.getElementById("output");

// Creating variables of different data types
let myString = "Hello, world!";           // String
const myNumber = 77;                        // Number
let myBoolean = true;                     // Boolean
let myUndefined = undefined;                // Undefined
const myNull = null;                        // Null
const mySymbol = Symbol('&');          // Symbol
var myObject = { name: "madhuri", rollno: 67 }; // Object

function displayDataType(variable, name) {
    outputDiv.innerHTML += `<p>${name}: ${typeof variable}</p>`;
}

// Displaying the data types using typeof
displayDataType(myString, "myString");
displayDataType(myNumber, "myNumber");
displayDataType(myBoolean, "myBoolean");
displayDataType(myUndefined, "myUndefined");
displayDataType(myNull, "myNull");
displayDataType(mySymbol, "mySymbol");
displayDataType(myObject, "myObject");
