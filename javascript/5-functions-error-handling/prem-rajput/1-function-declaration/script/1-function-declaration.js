function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function generateFibonacci(event) {
    event.preventDefault();
    var terms = document.getElementById("number").value;
    var result = "";

    for (var i = 0; i < terms; i++) {
        result += fibonacci(i) + " ";
    }

    document.getElementById("result").innerText = result;
}
