let message = "Hello This is Pranathi";
let age = 24;
let intrested = true;
let undefinedVar;
let nullVar = null;
let symbolVar = Symbol("output");
let objectVar = { name: "pranathi" };

document.getElementById("output").innerHTML = `
    name: ${typeof message}<br>
    age: ${typeof age}<br>
    intrested: ${typeof intrested}<br>
    undefinedVar: ${typeof undefinedVar}<br>
    null: ${typeof nullVar}  //typeof null will returns 'object' due to a well-known JavaScript quirk.<br>
    symbolVar: ${typeof symbolVar}<br>
    objectVar: ${typeof objectVar}
`;
