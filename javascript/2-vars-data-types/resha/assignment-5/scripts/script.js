const output = document.getElementById("output");

let str = "ABC";
let num = 50;
let bool = true;
let undef;
let n = null;
let sym = Symbol("sym");
let obj = { name: "DEF" };

function safeAdd(a, b) {
    try {
        return a + b;
    } catch (e) {
        return "Error: " + e.message;
    }
}

output.innerHTML += `"ABC" + 50 = ${str + num}<br>`;
output.innerHTML += `"ABC" + true = ${str + bool}<br>`;
output.innerHTML += `"ABC" + undefined = ${str + undef}<br>`;
output.innerHTML += `"ABC" + null = ${str + n}<br>`;
output.innerHTML += `"ABC" + Symbol = ${safeAdd(str, sym)}<br>`;
output.innerHTML += `"ABC" + Object = ${str + obj.name}<br><br>`;

output.innerHTML += `50 + true = ${num + bool}<br>`;
output.innerHTML += `50 + undefined = ${num + undef}<br>`;
output.innerHTML += `50 + null = ${num + n}<br>`;
output.innerHTML += `50 + Symbol = ${safeAdd(num, sym)}<br>`;
output.innerHTML += `50 + Object = ${num + obj.name}<br><br>`;

output.innerHTML += `true + undefined = ${bool + undef}<br>`;
output.innerHTML += `true + null = ${bool + n}<br>`;
output.innerHTML += `true + Symbol = ${safeAdd(bool, sym)}<br>`;
output.innerHTML += `true + Object = ${bool + obj.name}<br><br>`;

output.innerHTML += `undefined + null = ${undef + n}<br>`;
output.innerHTML += `undefined + Symbol = ${safeAdd(undef, sym)}<br>`;
output.innerHTML += `undefined + Object = ${undef + obj.name}<br><br>`;

output.innerHTML += `null + Symbol = ${safeAdd(n, sym)}<br>`;
output.innerHTML += `null + Object = ${n + obj.name}<br><br>`;

output.innerHTML += `Symbol + Object = ${safeAdd(sym, obj.name)}<br><br>`;

output.innerHTML += `Object + Symbol = ${safeAdd(obj, sym)}<br>`;
