const output = document.getElementById("output");

let name = "pallavi"; 
let age = 20; 
let isFemale = true; 
let undef; 
let nul = null; 
let sym = Symbol("id"); 
let obj = { name: "Pallavi", age: "20" }; 

output.innerHTML += `value: ${name}, type: ${typeof name}<br>`;
output.innerHTML += `value: ${age}, type: ${typeof age}<br>`;
output.innerHTML += `value: ${isFemale}, type: ${typeof isFemale}<br>`;
output.innerHTML += `value: ${undef}, type: ${typeof undef}<br>`;
output.innerHTML += `value: ${nul}, type: ${typeof nul}<br>`;
output.innerHTML += `value: ${sym.toString()}, type: ${typeof sym}<br>`;
output.innerHTML += `value: ${JSON.stringify(obj)}, type: ${typeof obj}<br>`;
