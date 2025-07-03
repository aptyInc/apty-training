// Declare variables using var, let, and const
var myVar = "Initial value of var";
let myLet = "Initial value of let";
const myConst = "Initial value of const";

// Print initial values
document.write("myVar: " + myVar + "<br>");
document.write("myLet: " + myLet + "<br>");
document.write("myConst: " + myConst + "<br><br>");

// Trying to redeclare the variables
var myVar = "Re-declared value of var"; // var can be redeclared
// let myLet = "Re-declared value of let"; // Error: let cannot be redeclared
// const myConst = "Re-declared value of const"; // Error: const cannot be redeclared


// Print after redeclaration
document.write("After redeclaration (var): " + myVar + "<br>");
// document.write("After redeclaration (let): " + myLet + "<br>"); // Will not be executed
// document.write("After redeclaration (const): " + myConst + "<br>"); // Will not be executed

// Trying to change the value of each variable
myVar = "Changed value of var"; // var can be reassigned
myLet = "Changed value of let"; // let can be reassigned
// myConst = "Changed value of const"; // Error: const cannot be reassigned

// Print after changing values
document.write("After changing (var): " + myVar + "<br>");
document.write("After changing (let): " + myLet + "<br>");
// document.write("After changing (const): " + myConst + "<br>"); // Will not be executed
