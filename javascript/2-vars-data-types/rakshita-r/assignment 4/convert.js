//string to string is a string
let a = "abc";
let conva = String(a);
console.log(conva);

//empty string to string is an empty string
let b = " ";
let convb = String(b);
console.log(convb);

//number to string is string
let c = 59;
let convc = String(c);
console.log(convc);

//boolean to string is a string
let d = true;
let convd = String(d);
console.log(convd);

//null to string is string
let e = "null";
let conve = String(e);
console.log(conve);

//string to undefined is string
let f = "undefined";
let convf = String(f);
console.log(convf);

//Number to string(enclosed number) is Number
let g = "123";
let convg = Number(g);
console.log(convg);

//Number to string(enclosed string) is String
let h = "123";
let convh = Number(g);
console.log(convh);

//Empty string to number is 0
let i = "";
let convi = Number(i);
console.log(convi);

//boolean to number is 1
let j = true;
let convj = Number(j);
console.log(convj);

//Using String() on a string value does not create an object. It simply returns the string itself as a primitive value.

let k={"Hello-World":"string"};
let convk=String(k)
console.log(convk)

//string cannot be converted into symbol ,instead we need to use symbol tag
const str = "hello";

// Using Symbol() - creates a unique symbol
const sym = Symbol(str);
console.log(sym);                // Output: Symbol(hello)
console.log(typeof sym);         // Output: "symbol"

// Using String() - does not create a Symbol
console.log(String(str));        // Output: "hello"
console.log(typeof String(str)); // Output: "string"


//Using Number() on a number does not create an object. It simply returns the numeric value itself as a primitive number.
const num = 42;

// Using Number() - remains a primitive number
console.log(Number(num));        // Output: 42
console.log(typeof Number(num)); // Output: "number"

// Using new Number() - creates a Number object
const numObj = new Number(num);
console.log(numObj);             // Output: [Number: 42]
console.log(typeof numObj);      // Output: "object"

//A number cannot be converted to a Symbol using Number(). If you attempt to use Symbol() with a number, it will throw an error because the argument to Symbol() must be a string (description) or left undefined.
const num1= 42;

// Attempting to create a Symbol with a number
try {
    const sym = Symbol(num);
    console.log(sym);
} catch (error) {
    console.log(error.message); // Output: Cannot convert a number to a symbol
}


const output = `${a}:${typeof a}"Converted type using String is"${conva}:${typeof conva}<br>
                ${b}:${typeof b}"Converted type using String is"${convb}:${typeof convb}<br>
                ${c}:${typeof c}"Converted type using String is"${convc}:${typeof convc}<br>
                ${d}:${typeof d}"Converted type using String is"${convd}:${typeof convd}<br>
                 ${e}:${typeof e}"Converted type using String is"${conve}:${typeof conve}<br>
                  ${f}:${typeof f}"Converted type using String is"${convf}:${typeof convf}<br>
                   ${g}:${typeof g}"Converted type using Number is"${convg}:${typeof convg}<br>
                    ${h}:${typeof h}"Converted type using Number is"${convh}:${typeof convh}<br>
                     ${i}:${typeof i}"Converted type using Number is"${convi}:${typeof convi}<br>
                      ${j}:${typeof j}"Converted type using Number is"${convj}:${typeof convj}<br>
                      ${k}:${typeof k}"Converted type using Number is"${convk}:${typeof convk}<br>`;

const Results = document.getElementById("convert");
Results.innerHTML = output;
