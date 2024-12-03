// Variables with different data types
let message = "Hello, world!"; // String
let count = 100;               // Number
let isActive = true;           // Boolean
let unknown = undefined;       // Undefined
let emptyValue = null;         // Null
let undefinedValue // Declared the variable but not assigned a value
let uniqueSymbol = Symbol('unique');

const Results = document.getElementById("Result");

const variables = [
  { name: "message", value: message },
  { name: "count", value: count },
  { name: "isActive", value: isActive },
  { name: "unknown", value: unknown },
  { name: "emptyValue", value: emptyValue },
  {name:"undefinedValue", value: emptyValue},
  {name:"uniqueSymbol", value: uniqueSymbol},
];

// Display the type of each variable in the div
variables.forEach(variable => {
  const p = document.createElement("p");
  p.textContent = `Type of ${variable.name}: ${typeof variable.value}`;
  Results.appendChild(p);
});
