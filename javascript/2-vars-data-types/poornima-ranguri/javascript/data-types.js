let primitiveContainer = document.getElementById("primitiveContainer");
let nonPrimitiveContainer = document.getElementById("nonPrimitiveContainer");

let stringVariable = "Poornima G";
let numberVariable = 333;
let booleanValue = true;
let undefinedValue;
let nullVar = null;
let symbolVar = Symbol('id');

let Laptop = {
    name: "HP",
    RAM: "8 GB"
};

let fruits = ["apple", "grapes", "pineapple"];

function greet() {
    return "Welcome to Apty";
};

// Primitive Data Types
let paragraphElement1 = document.createElement("p");
paragraphElement1.innerText = "Poornima G is a " + typeof(stringVariable);
primitiveContainer.appendChild(paragraphElement1);

let paragraphElement2 = document.createElement("p");
paragraphElement2.innerText = "333 is a " + typeof(numberVariable);
primitiveContainer.appendChild(paragraphElement2);

let paragraphElement3 = document.createElement("p");
paragraphElement3.innerText = "true is a " + typeof(booleanValue);
primitiveContainer.appendChild(paragraphElement3);

let paragraphElement4 = document.createElement("p");
paragraphElement4.innerText = "undefined is a " + typeof(undefinedValue);
primitiveContainer.appendChild(paragraphElement4);

let paragraphElement5 = document.createElement("p");
paragraphElement5.innerText = "null is a " + typeof(nullVar);
primitiveContainer.appendChild(paragraphElement5);

let paragraphElement6 = document.createElement("p");
paragraphElement6.innerText = "symbol is a " + typeof(symbolVar);
primitiveContainer.appendChild(paragraphElement6);

// Non-Primitive Data Types
let paragraphElement7 = document.createElement("p");
paragraphElement7.innerText = "Laptop is a " + typeof(Laptop);
nonPrimitiveContainer.appendChild(paragraphElement7);

let paragraphElement8 = document.createElement("p");
paragraphElement8.innerText = "fruits is a " + typeof(fruits);
nonPrimitiveContainer.appendChild(paragraphElement8);

let paragraphElement9 = document.createElement("p");
paragraphElement9.innerText = "greet function is a " + typeof(greet);
nonPrimitiveContainer.appendChild(paragraphElement9);
