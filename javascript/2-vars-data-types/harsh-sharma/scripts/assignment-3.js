let string_type = document.getElementById("string_type");
let number_type = document.getElementById("number_type");
let boolean_type = document.getElementById("boolean_type");
let undefined_type = document.getElementById("undefined_type");
let symbol_type = document.getElementById("symbol_type");
let object_type = document.getElementById("object_type");
let null_type = document.getElementById("null_type");

let string_var = "I am a String";
string_type.innerHTML = `This is a string data type and its type is: ${typeof string_var}`;

let number_var = 123;
number_type.innerHTML = `This is a number data type and its type is: ${typeof number_var}`;

let boolean_var = true;
boolean_type.innerHTML = `This is a boolean data type and its type is: ${typeof boolean_var}`;

let undefined_var;
undefined_type.innerHTML = `This is an undefined data type and its type is: ${typeof undefined_var}`;

let null_var = null;
null_type.innerHTML = `This is a null data type and its type is: ${typeof null_var}`;

let object_var = {
  employee1: "harsh",
  employee2: "sai",
};
object_type.innerHTML = `This is an object data type and its type is: ${typeof object_var}`;

let symbol_var = Symbol("A");
symbol_type.innerHTML = `This is a symbol data type and its type is: ${typeof symbol_var}`;
