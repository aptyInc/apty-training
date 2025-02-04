function processInput() {
    // Get the input from the user
    const input = document.getElementById("numbersInput").value;
    
    // Convert the input string into an array of numbers
    const numbers = input.split(',').map(num => parseInt(num.trim()));
    
    // Chain the array methods: filter, map, and reduce
    const result = numbers
        .filter(num => num % 2 === 0)  // Filter even numbers
        .map(num => num * 2)           // Double the filtered numbers
        .reduce((sum, num) => sum + num, 0); // Sum the resulting numbers
    
    // Display the result
    document.getElementById("result").innerText = `The sum of doubled even numbers is: ${result}`;
}
