function sumOfNumbers() {
    let num1 = document.getElementById("number").value;

    num1 = parseInt(num1);

    let sum = 0;
    let counter = 1;

    while (counter <= num1) {
        sum = sum + counter;
        counter = counter + 1;
    }

    document.getElementById("result").innerText = "sum of numbers = " + sum;
}