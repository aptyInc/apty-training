let Redeclaration = document.getElementById("redeclaration");
let reassign = document.getElementById("reassign");
try {
  eval("const a = 0; const a = 1;");
} catch (e) {
  Redeclaration.innerHTML += `const : ${e.message} <br>`;
}
try {
  eval("let b = 0; let b = 1;");
} catch (e) {
  Redeclaration.innerHTML += ` let : ${e.message} <br>`;
}
try {
  eval("var a = 0; var a = 1;");
  Redeclaration.innerHTML += ` var : we can redeclare using var <br>`;
} catch (e) {
  Redeclaration.innerHTML += `var : ${e.message} <br>`;
}

try {
  eval("const a = 0;  a = 1;");
} catch (e) {
  reassign.innerHTML += ` const : ${e} <br>`;
}
try {
  eval("let b = 0; b = 1;");
  reassign.innerHTML += ` let : we can re-assign using let <br>`;
} catch (e) {
  reassign.innerHTML += ` let : ${e} <br>`;
}
try {
  eval("var b = 0; b = 1;");
  reassign.innerHTML += ` var : we can re-assign using var <br>`;
} catch (e) {
  reassign.innerHTML += ` var : ${e} <br>`;
}