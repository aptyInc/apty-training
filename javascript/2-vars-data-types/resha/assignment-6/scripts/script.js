const output = document.getElementById('output');

let str = "Resha";
let num = 22;
let bool = true;
let undef;
let nul = null;
let sym = Symbol("sym");
let obj = { name: "Kadve" };

output.innerHTML = `Hey, this is ${str + ' ' + obj.name + ', ' + num} years old.<br>Boolean: ${bool}<br>Undefined: ${undef}<br>Null: ${nul}<br>Symbol: ${sym.toString()}`;
