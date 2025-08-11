//To check in the console

let num = "123";  // String
let convertedNum = Number(num); // Explicitly converting String to Number
console.log(typeof convertedNum, convertedNum); // Output: "number"

let num1 = 234;
let strNum = String(num1); 
console.log(typeof strNum, strNum); 

let undefinedVal = undefined;
let numUndefined = Number(undefinedVal);
console.log(typeof numUndefined, numUndefined);

let str = 'preeti';
let booleanstr = Boolean(str);
console.log(typeof booleanstr, booleanstr);

let nullValue = null;
let boolNull = Boolean(nullValue);
console.log(typeof boolNull, boolNull);

let sym = Symbol("id");
let strSym = String(sym);
console.log(typeof strSym, strSym);

let obj = { key: "value" };
let numObj = Number(obj);
console.log(typeof numObj, numObj);

//To print using HTML

const output = `Value -> ${convertedNum}, Type -> ${typeof convertedNum} <br>
                Value -> ${strNum}, Type -> ${typeof strNum} <br>
                Value -> ${numUndefined}, Type -> ${typeof numUndefined}<br>
                Value -> ${booleanstr}, Type -> ${typeof booleanstr}<br>
                Value -> ${boolNull}, Type -> ${typeof boolnull}<br>
                Value -> ${strSym}, Type -> ${typeof strSym}<br>
                Value -> ${numObj}, Type -> ${typeof numObj}<br>`;

const Results = document.getElementById('Result');

Results.innerHTML = output;

