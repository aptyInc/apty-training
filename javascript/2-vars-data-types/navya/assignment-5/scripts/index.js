const output = document.getElementById("result");

let str = "6";
let num = 8;
let bool = true;
let undef;
let nul = null;
let obj = { a: 2 };

output.innerHTML += `Number + Number: ${num + num}<br>`;
output.innerHTML += `String + Number: ${str + num}<br>`;
output.innerHTML += `Number + Boolean: ${num + bool}<br>`;
output.innerHTML += `Null + Number: ${nul + num}<br>`;
output.innerHTML += `Undefined + Number: ${undef + num}<br>`;
output.innerHTML += `Number + Object: ${num + obj}<br>`;
output.innerHTML += `Object + String: ${obj + str}<br>`;