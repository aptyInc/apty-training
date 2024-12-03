let a = "43abc";
let conva = Number(a);
console.log(conva);

let b = "Convert Me To String";
let convb = Number(b);
console.log(convb);

let c = 59;
let convc = String(c);
console.log(convc);

let d = "00123";
let convd = Number(d);
console.log(convd);

const output = `${a}:${typeof a}"Converted type using Number is"${conva}:${typeof conva}<br>
                ${b}:${typeof b}"Converted type using Number is"${convb}:${typeof convb}<br>
                ${c}:${typeof c}"Converted type using Number is"${convc}:${typeof convc}<br>
                ${d}:${typeof d}"Converted type using Number is"${convd}:${typeof convd}`;

const Results = document.getElementById("convert");
Results.innerHTML = output;
