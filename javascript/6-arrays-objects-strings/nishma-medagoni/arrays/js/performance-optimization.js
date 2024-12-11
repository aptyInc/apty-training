function comparePerformance() {
    const largeArray = [];
    for (let i = 1; i <= 1000000; i++) {
        largeArray.push(i);
    }

    let results = '';
    let startTime, endTime, sum;

    // Test 1: For Loop
    sum = 0;
    startTime = new Date().getTime();
    for (let i = 0; i < largeArray.length; i++) {
        sum += largeArray[i];
    }
    endTime = new Date().getTime();
    results += `For Loop: ${(endTime - startTime)} ms\n`

    // Test 2: For...of Loop
    sum = 0;
    startTime = new Date().getTime();
    for (const num of largeArray) {
        sum += num;
    }
    endTime = new Date().getTime();
    results += `For...of Loop: ${(endTime - startTime)} ms\n`;

    // Test 3: forEach Loop
    sum = 0;
    startTime = new Date().getTime();
    largeArray.forEach(function(num) {
        sum += num;
    });
    endTime = new Date().getTime();
    results += `forEach Loop: ${(endTime - startTime)} ms\n`;

    // Explanation
    results += '\n--- Explanation ---\n';
    results += 'For Loop: Generally the fastest because it directly accesses array indices.\n';
    results += 'For...of Loop: Slightly slower as it works with array elements directly.\n';
    results += 'ForEach Loop: Slowest, as it involves a function call for each element.\n';

    document.getElementById('results').innerText = results;
}