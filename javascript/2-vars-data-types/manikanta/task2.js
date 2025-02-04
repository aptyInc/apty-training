var a = 1;
const c = 3;

document.getElementById("var1").innerHTML = `my initial value ${a}`;
a = a * 10;
document.getElementById("var2").innerHTML = `my value after changing ${a}`;
var a = 1;
document.getElementById("var3").innerHTML = `I'm redeclared, my value is ${a}`;

// Trying to redeclare let b in the same block to trigger an error

    let b = 2;
    document.getElementById("let1").innerHTML = `my initial value ${b}`;
    b = b * 10;
    document.getElementById("let2").innerHTML = `my value after changing ${b}`;
    document.getElementById("let3").innerHTML = "after redecleration Uncaught SyntaxError: Identifier 'b' has already been declared";


document.getElementById("c1").innerHTML = `my initial value ${c}`;
document.getElementById("c2").innerHTML =' after reassignment Uncaught TypeError: Assignment to constant variable.'
document.getElementById("c3").innerHTML="after redeclaration Uncaught SyntaxError: Identifier 'c' has already been declared"