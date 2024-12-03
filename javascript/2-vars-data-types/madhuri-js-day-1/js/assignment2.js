const output = document.getElementById("output");
function display(message) {
    output.innerHTML += `<p>${message}</p>`;
}

// var example
var myVar = "Initial var value 10";
display("myVar: " + myVar);

var myVar = "Re-declared var value 20"; // Allowed
display("myVar: " + myVar);

myVar = "Updated var value 30"; // Allowed
display("myVar: " + myVar);//All three are allowed

// let example
let myLet = "Initial let value";
display("myLet: " + myLet);
// Error occur when we try to re-declare in let
display("Error re-declaring myLet: " + myLet);
// Error occur when we try to update in let
display("Updated myLet: " + myLet);

// const example
const myConst = "Initial const value";
display("myConst: " + myConst);

// Error occur when we try to re-declare in constant
display("Error re-declaring myConst: " + error.message);

// Error occur when we try to update in constant
display("Error updating myConst: " + error.message);
