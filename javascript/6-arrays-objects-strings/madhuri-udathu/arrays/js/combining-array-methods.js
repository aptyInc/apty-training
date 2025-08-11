function processArray() {
    const input = document.getElementById("numbers").value;
    const numbers = input.split(',').map(Number);

    const sum = numbers
        .filter(num => num % 2 === 0) // Filter even numbers
        .map(num => num * 2)          // Double the filtered numbers
        .reduce((acc, num) => acc + num, 0); // Find the sum

    // Display the result
    document.getElementById("result").textContent = `Sum of the processed numbers: ${sum}`;
}

