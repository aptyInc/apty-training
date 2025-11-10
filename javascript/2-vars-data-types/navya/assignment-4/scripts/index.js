const output = document.getElementById("result");

let str = "123";
let num = 1417;
let bool = false;
let undef;
let nul = null;
let sym = Symbol("sym");
let obj = { name: "Jack" };

output.innerHTML += "<h3>To Number:</h3>";
output.innerHTML += `String : ${Number(str)}<br>`;
output.innerHTML += `Boolean : ${Number(bool)}<br>`;
output.innerHTML += `Null : ${Number(nul)}<br>`;
output.innerHTML += `Undefined : ${Number(undef)}<br>`;

output.innerHTML += "<h3>To String:</h3>";
output.innerHTML += `Number : ${String(num)}<br>`;
output.innerHTML += `Boolean : ${String(bool)}<br>`;
output.innerHTML += `Undefined : ${String(undef)}<br>`;
output.innerHTML += `Null : ${String(nul)}<br>`;
output.innerHTML += `Symbol : ${sym.toString()}<br>`;
output.innerHTML += `Object : ${String(obj)}<br>`;

output.innerHTML += "<h3>To Boolean:</h3>";
output.innerHTML += `Number : ${Boolean(num)}<br>`;
output.innerHTML += `Undefined : ${Boolean(undef)}<br>`;
output.innerHTML += `Null : ${Boolean(nul)}<br>`;
output.innerHTML += `Object : ${Boolean(obj)}<br>`;