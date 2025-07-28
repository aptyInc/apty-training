let fullName = "Saket Raj";
let age = 22;
let isFollow = true;
let Undefined = undefined;
let Null = null;
let symbol = Symbol("Hello!");
let loc = { Area: "hyd", PinCode: 500081 };

document.getElementById("str").innerHTML = "String - " + typeof fullName;
document.getElementById("num").innerHTML = "Number - " + typeof age;
document.getElementById("bool").innerHTML = "Boolean - " + typeof isFollow;
document.getElementById("undef").innerHTML = "Undefined - " + typeof Undefined;
document.getElementById("null").innerHTML = "Null - " + typeof Null;
document.getElementById("sym").innerHTML = "Symbol - " + typeof symbol;
document.getElementById("obj").innerHTML = "Object - " + typeof loc;
