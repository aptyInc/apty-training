let stringVar = "Hello, World!";
let numberVar = 42;
let booleanVar = true;
let undefinedVar;
let nullVar = null;
//let symbolVar = Symbol("unique");
let objectVar = { key: "value" };

const output = `${stringVar}:"The datatype is"${typeof stringVar}<br>
              ${numberVar}:"The datatype is"${typeof numberVar}<br>
              ${booleanVar}:"The datatype is"${typeof booleanVar}<br>
               ${undefinedVar}:"The datatype is"${typeof undefinedVar}<br>
               ${nullVar}:"The datatype is"${typeof nullVar}<br>
               ${objectVar}:"The datatype is "${typeof objectVar}`;

const Results = document.getElementById("data-types");
Results.innerHTML = output;
