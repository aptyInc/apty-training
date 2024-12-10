//Rest Parameter
function calculateSum() {
    const input = document.getElementById("numbers").value;
    const numbers = input.split(",").map(Number); // Split input and convert to numbers

    const sum = sumOfNumbers(...numbers); // Using the rest parameter

    document.getElementById("result").innerText = `Sum: ${sum}`;
}

const sumOfNumbers = (...args) => args.reduce((total, num) => total + num, 0); // Calculate the sum
