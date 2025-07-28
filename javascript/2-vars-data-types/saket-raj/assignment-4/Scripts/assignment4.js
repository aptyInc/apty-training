let numVal = 5;
let strVal = "10";
let boolVal = true;
let undefVal = undefined;
let nullVal = null;
let symVal = Symbol("Hello!");
let objVal = { rollno: 10 };

let conv_num = "";
conv_num += "Number(5): " + Number(numVal) + "<br>";
conv_num += 'Number("10"): ' + Number(strVal) + "<br>";
conv_num += "Number(true): " + Number(boolVal) + "<br>";
conv_num += "Number(undefined): " + Number(undefVal) + "<br>";
conv_num += "Number(null): " + Number(nullVal) + "<br>";
conv_num += "Number(object {rollno:10}): " + Number(objVal.rollno) + "<br>";
//Number(symbol) -> error
document.getElementById("output-num").innerHTML =
  "Number Conversions:<br>" + conv_num;

let conv_str = "";
conv_str += "String(5): " + String(numVal) + "<br>";
conv_str += 'String("10"): ' + String(strVal) + "<br>";
conv_str += "String(true): " + String(boolVal) + "<br>";
conv_str += "String(undefined): " + String(undefVal) + "<br>";
conv_str += "String(null): " + String(nullVal) + "<br>";
conv_str += "String(object {rollno:10}): " + String(objVal.rollno) + "<br>";
conv_str += "String(Symbol): " + String(symVal) + "<br>";
document.getElementById("output-str").innerHTML =
  "String Conversions:<br>" + conv_str;

let conv_bool = "";
conv_bool += "Boolean(5): " + Boolean(numVal) + "<br>";
conv_bool += 'Boolean("10"): ' + Boolean(strVal) + "<br>";
conv_bool += "Boolean(true): " + Boolean(boolVal) + "<br>";
conv_bool += "Boolean(undefined): " + Boolean(undefVal) + "<br>";
conv_bool += "Boolean(null): " + Boolean(nullVal) + "<br>";
conv_bool += "Boolean(object {rollno:10}): " + Boolean(objVal.rollno) + "<br>";
conv_bool += "Boolean(Symbol): " + Boolean(symVal) + "<br>";
document.getElementById("output-bool").innerHTML =
  "Boolean Conversions:<br>" + conv_bool;

let conv_undef = "";
conv_undef += "Number(undefined): " + Number(undefVal) + "<br>";
conv_undef += "String(undefined): " + String(undefVal) + "<br>";
conv_undef += "Boolean(undefined): " + Boolean(undefVal) + "<br>";
document.getElementById("output-undef").innerHTML =
  "Undefined Conversions:<br>" + conv_undef;

let conv_null = "";
conv_null += "Number(null): " + Number(nullVal) + "<br>";
conv_null += "String(null): " + String(nullVal) + "<br>";
conv_null += "Boolean(null): " + Boolean(nullVal) + "<br>";
document.getElementById("output-null").innerHTML =
  "Null Conversions:<br>" + conv_null;

let conv_sym = "";
conv_sym += "String(Symbol): " + String(symVal) + "<br>";
conv_sym += "Boolean(Symbol): " + Boolean(symVal) + "<br>";
document.getElementById("output-sym").innerHTML =
  "Symbol Conversions:<br>" + conv_sym;

let conv_obj = "";
conv_obj += "Number(object {rollno:10}): " + Number(objVal.rollno) + "<br>";
conv_obj += "String(object {rollno:10}): " + String(objVal.rollno) + "<br>";
conv_obj += "Boolean(object {rollno:10}): " + Boolean(objVal.rollno) + "<br>";
document.getElementById("output-obj").innerHTML =
  "Object Conversions:<br>" + conv_obj;
