function calculateFactorial() {
    const n = Number(document.getElementById("numberInput").value);
    let factorial = 1;
    let steps="";
    let i = n;

    do {
        if(i===1){
            factorial=1;
        }
        if (i > 1) {
            let f=factorial;
            factorial *= i;
            steps += `${f} * ${i} = ${f * i}<br>`;
        }
        i--;
    } while (i > 0);
    document.getElementById("steps").innerHTML = steps;
    document.getElementById("result").textContent = `The factorial of ${n} is ${factorial}.`;
}