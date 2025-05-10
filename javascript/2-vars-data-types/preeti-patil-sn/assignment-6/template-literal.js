let message = "Hello, world!"; // String
let count = 100;               // Number
let isactive = true;           // boolean
let unknown = undefined;       // undefined
let emptyvalue = null;         // null
//let undefinedValue // Declared the variable but not assigned a value
let uniqueSymbol = Symbol('unique');

// console.log(`All the Data Types:\n ${message}\n ${count}\n ${isActive}\n${unknown}\n${emptyValue}\n ${uniqueID}\n${largeNumber}`);

console.log(`All the Data Types:\n${message}\n${count}\n${isactive}\n${unknown}\n${emptyvalue}\n`);

const resultsDiv = document.getElementById('Results');

const output = `
  All the Data Types:<br>
  String: ${message}<br>
  Number: ${count}<br>
  Boolean: ${isactive}<br>
  Undefined: ${unknown}<br>
  Null: ${emptyvalue}<br>
`;

// const output = `All the Data Types:\n ${message}\n ${count}\n ${isActive}\n${unknown}\n${emptyValue}\n ${uniqueID}\n${largeNumber}`;

resultsDiv.innerHTML = output;