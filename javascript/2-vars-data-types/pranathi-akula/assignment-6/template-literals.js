let message = "Hello This is Pranathi";
let age = 24;
let intrested = true;
let undefinedVar;
let nullvar = null;
let symbolVar = Symbol("output");
let objectVar = { name: "pranathi" };

let output = ` My message is  ${message}, age ${age}, intrested ${intrested}, my undefinedvar is ${undefinedVar}, nullvalue is ${nullvar}, symbol is ${symbolVar.toString()}, object is ${JSON.stringify(
  objectVar
)}
      `;
document.getElementById("output").innerHTML = output;
