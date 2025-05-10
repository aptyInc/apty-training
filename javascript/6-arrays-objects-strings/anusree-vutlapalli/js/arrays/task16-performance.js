function testPerformance() {
    const largeArray = Array(1000000).fill(0); 

    // Measure for loop
    let start = performance.now();
    for (let i = 0; i < largeArray.length; i++) {
        let value = largeArray[i];
    }
    let forTime = performance.now() - start;

    // Measure for...of loop
    start = performance.now();
    for (let value of largeArray) {
        // Process value
    }
    let forOfTime = performance.now() - start;

    // Measure forEach loop
    start = performance.now();
    largeArray.forEach(value => {
        // Process value
    });
    let forEachTime = performance.now() - start;

    // Display results
    document.getElementById('output').innerHTML = `
        For Loop: ${forTime.toFixed(2)} ms<br>
        For...of Loop: ${forOfTime.toFixed(2)} ms<br>
        forEach Loop: ${forEachTime.toFixed(2)} ms
    `;
}