const output = document.getElementById("output");

let str = "abc";
output.innerHTML += "String ('123') to Number: " + Number(str) + "<br>";
output.innerHTML += "String ('123') to Boolean: " + Boolean(str) + "<br><br>";

let num = 45;
output.innerHTML += "Number ('45') to String: " + String(num) + "<br>";
output.innerHTML += "Number ('45') to Boolean: " + Boolean(num) + "<br><br>";

let bool = true;
output.innerHTML += "Boolean ('true') to String: " + String(bool) + "<br>";
output.innerHTML += "Boolean ('true') to Number: " + Number(bool) + "<br><br>";

let undef;
output.innerHTML += "Undefined to String: " + String(undef) + "<br>";
output.innerHTML += "Undefined to Number: " + Number(undef) + "<br>";
output.innerHTML += "Undefined to Boolean: " + Boolean(undef) + "<br><br>";

let nul = null;
output.innerHTML += "Null to String: " + String(nul) + "<br>";
output.innerHTML += "Null to Number: " + Number(nul) + "<br>";
output.innerHTML += "Null to Boolean: " + Boolean(nul) + "<br><br>";

let sym = Symbol("test");
try {
    output.innerHTML += "Symbol to String: " + String(sym) + "<br>";
} catch (e) {
    output.innerHTML += "Symbol to String: Error - " + e.message + "<br>";
}
try {
    output.innerHTML += "Symbol to Number: " + Number(sym) + "<br>";
} catch (e) {
    output.innerHTML += "Symbol to Number: Error - " + e.message + "<br>";
}
output.innerHTML += "Symbol to Boolean: " + Boolean(sym) + "<br><br>";

let obj = { name: "ABC" };
output.innerHTML += "Object name: " + obj.name + "<br>";
output.innerHTML += "Object to String: " + String(obj) + "<br>";
output.innerHTML += "Object to Number: " + Number(obj) + "<br>";
output.innerHTML += "Object to Boolean: " + Boolean(obj) + "<br>";
