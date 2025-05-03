var stringVar = "Prem Rajput";         
var numberVar = 42;               
var booleanVar = true;          
var undefinedVar;            
var nullVar = null;              
var symbolVar = Symbol("id");     
var objectVar = { name: "Prem Rajput" };

document.getElementById("string-type").innerText = stringVar + " :  " + typeof stringVar;
document.getElementById("number-type").innerText = numberVar + " :  " + typeof numberVar;
document.getElementById("boolean-type").innerText = booleanVar + " :  " + typeof booleanVar;
document.getElementById("undefined-type").innerText = undefinedVar + " :  " + typeof undefinedVar;
document.getElementById("null-type").innerText = nullVar + " :  " + typeof nullVar;
document.getElementById("symbol-type").innerText = symbolVar + " :  " + typeof symbolVar;
document.getElementById("object-type").innerText = objectVar + " :  " + typeof objectVar;