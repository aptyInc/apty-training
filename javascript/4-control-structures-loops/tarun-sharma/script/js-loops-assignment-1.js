function primeNumbers() {
    let num1 = document.getElementById("number").value;

    num1 = parseInt(num1);

    let result = "";

    for (let i = 1; i <= 10; i++) {
        result += `${num1} × ${i} = ${num1 * i}\n`;
    }

    document.getElementById("result").innerText = result;


}