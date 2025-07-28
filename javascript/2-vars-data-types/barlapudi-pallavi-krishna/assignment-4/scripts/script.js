const output = document.getElementById("output");

let str = "123";
let num = 123;
let bool = true;
let undef = undefined;
let nul = null;
let sym = Symbol("id");
let obj = { name: "pallavi" };

output.innerHTML += `<strong>String</strong><br>`;
output.innerHTML += `To String: ${String(str)}<br>`;
output.innerHTML += `To Number: ${Number(str)}<br>`;
output.innerHTML += `To Boolean: ${Boolean(str)}<br><br>`;

output.innerHTML += `<strong>Number</strong><br>`;
output.innerHTML += `To String: ${String(num)}<br>`;
output.innerHTML += `To Number: ${Number(num)}<br>`;
output.innerHTML += `To Boolean: ${Boolean(num)}<br><br>`;

output.innerHTML += `<strong>Boolean</strong><br>`;
output.innerHTML += `To String: ${String(bool)}<br>`;
output.innerHTML += `To Number: ${Number(bool)}<br>`;
output.innerHTML += `To Boolean: ${Boolean(bool)}<br><br>`;

output.innerHTML += `<strong>Undefined</strong><br>`;
output.innerHTML += `To String: ${String(undef)}<br>`;
output.innerHTML += `To Number: ${Number(undef)}<br>`;
output.innerHTML += `To Boolean: ${Boolean(undef)}<br><br>`;

output.innerHTML += `<strong>Null</strong><br>`;
output.innerHTML += `To String: ${String(nul)}<br>`;
output.innerHTML += `To Number: ${Number(nul)}<br>`;
output.innerHTML += `To Boolean: ${Boolean(nul)}<br><br>`;

output.innerHTML += `<strong>Symbol</strong><br>`;
output.innerHTML += `To String: ${sym.toString()}<br>`;
output.innerHTML += `To Boolean: ${Boolean(sym)}<br><br>`;

output.innerHTML += `<strong>Object</strong><br>`;
output.innerHTML += `To String: ${String(obj)}<br>`;
output.innerHTML += `To Number: ${Number(obj)}<br>`;
output.innerHTML += `To Boolean: ${Boolean(obj)}<br><br>`;
