let stringVar = "Hello, World!";
let numberVar = 42;
let booleanVar = true;
let undefinedVar;
let nullVar = null;
let symbolVar = Symbol("unique");
let objectVar = { key: "value" };

const list = document.getElementById("data-types");

function displayType(variable, variableName) {
  const listItem = document.createElement("li");
  listItem.textContent = `${variableName}: ${typeof variable}`;
  list.appendChild(listItem);
}

displayType(stringVar, "String");
displayType(numberVar, "Number");
displayType(booleanVar, "Boolean");
displayType(undefinedVar, "Undefined");
displayType(nullVar, "Null (special case: typeof is object)");
displayType(symbolVar, "Symbol");
displayType(objectVar, "Object");
