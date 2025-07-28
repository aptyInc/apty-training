const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
let a = 7;
try {
    a = 20;
    output1.innerText = `Reassigned let: a = ${a}`;
} catch (error) {
    output1.innerText = `Error on reassignment let: a = ${error.message}`;
}

try {
    let a = 8;
    output2.innerText = `Redeclared let: a = ${a} (in new block scope)`;
} catch (error) {
    output2.innerText = `Error on let redeclaration: ${error.message}`;
}

const output3 = document.getElementById("output3");
const output4 = document.getElementById("output4");
const b = 7;
try {
    b = 20;
    output3.innerText = `Reassigned const: b = ${b}`;
} catch (error) {
    output3.innerText = `Error on reassignment const: b = ${error.message}`;
}

try {
    const b = 8;
    output4.innerHTML = `Redeclared const: b = ${b} (in new block scope)`;
} catch (error) {
    output4.innerText = `Error on const redeclaration: ${error.message}`;
}

const output5 = document.getElementById("output5");
const output6 = document.getElementById("output6");
var c = 7;
try {
    c = 20;
    output5.innerText = `Reassigned var: c = ${c}`;
} catch (error) {
    output5.innerText = `Error on reassignment var: c = ${error.message}`;
}

try {
    var c = 8;
    output6.innerText = `Redeclared var: c = ${c}`;
} catch (error) {
    output6.innerText = `Error on var redeclaration: ${error.message}`;
}
