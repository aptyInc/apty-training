var x = 5;
document.getElementById("var-result").innerText = "Var value: " + x;

var x = 10;
document.getElementById("var-result").innerText += "\nRe-declared Var value: " + x;

let y = 50;
document.getElementById("let-result").innerText = "Let value: " + y;

y = 100;
document.getElementById("let-result").innerText += "\nChanged Let value: " + y;

const z = 20;
document.getElementById("const-result").innerText = "Const value: " + z + "\nIf we try to change the const, we will get this error: Cannot redeclare block-scoped variable 'z'.";