function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function calcFib() {
    const num = document.getElementById("number").value;
    let result = "";

    for (let i = 0; i <= num; i++) {
        result += fibonacci(i) + " ";
    }

    document.getElementById("result").innerText = result;
}
