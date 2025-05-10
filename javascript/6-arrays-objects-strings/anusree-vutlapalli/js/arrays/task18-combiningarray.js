function processArray() {
    // Get the input and convert it to an array of numbers
    let numbers = document.getElementById('numbers').value.split(',').map(Number);

    // Chain array methods: filter, map, and reduce
    let sum = numbers
        .filter(num => num % 2 === 0) // Keep even numbers
        .map(num => num * 2)          // Double the even numbers
        .reduce((acc, num) => acc + num, 0); // Find the sum

    // Display the result
    document.getElementById('result').textContent = sum;
}

