const a = "10"; 
const b = 5;    
const c = true; 
const d = null;
const e = undefined;
const f = {madhuri: 67};
const resultsDiv = document.getElementById("results");

function showResult(result) {
    const p = document.createElement("p");
    p.textContent = result;
    resultsDiv.appendChild(p);
}
console.log(0 == false);  // true
console.log("" == false); // true
console.log([] == false); //true
console.log([] + []); // "" (empty string)
console.log({} + []); // "[object Object]"

showResult(`"10" + 5 = ${a + b}`); // String + number
showResult(`5 + true = ${b + c}`); // number + Boolean
showResult(`"10" + true = ${a + c}`); // String + Boolean
showResult(`"10"+ null = ${a + d}`);//String + null
showResult(`5 + null = ${b + d}`); // number + null
showResult(`5 + undefined = ${b + e}`)//number + undefined
showResult(`"10" + { madhuri,67} = ${a + f}`)//string + object