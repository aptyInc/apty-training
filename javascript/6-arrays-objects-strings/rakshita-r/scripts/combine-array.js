function processNumbers() {
    // Get the array input and convert it into an array of numbers
    const numbers = document.getElementById('numbersInput').value.split(',').map(item => Number(item.trim()));

    // Chain the array methods: filter, map, reduce to get the sum of doubled even numbers
    const sum = numbers
        .filter(num => num % 2 === 0)  // Filter even numbers
        .map(num => num * 2)           // Double the filtered numbers
        .reduce((acc, num) => acc + num, 0);  // Find the sum of the resulting numbers

    // Display the result
    document.getElementById('result').innerText = `The sum of doubled even numbers is: ${sum}`;
}