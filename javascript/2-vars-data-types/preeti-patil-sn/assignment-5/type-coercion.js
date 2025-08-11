//string+number
let result = "5" + 10;
//string+boolean
let result1 = "Hello" + true;
//number+boolean
let result2 = 5 + true;  // 6 (true is coerced to 1)
let result3 = 5 + false; // 5 (false is coerced to 0)
//string+undefined
let result4 = "Hello" + undefined; 
//string+null
let result5 = "Hello" + null; 
//number+undefined
let result6 = 5 + undefined;  // NaN
//number+null
let result7 = 5 + null;  // 5 (null is coerced to 0)

console.log(`${result}\n${result1}\n${result2}\n${result3}\n${result4}\n${result5}\n${result6}\n${result7}\n`);

const output = `${result}<br>
                ${result1}<br>
                ${result2}<br>
                ${result3}<br>
                ${result4}<br>
                ${result5}<br>
                ${result6}<br>
                ${result7}<br>
               `;

const Results = document.getElementById('Result');

Results.innerHTML = output;
