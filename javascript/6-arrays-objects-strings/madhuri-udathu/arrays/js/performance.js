function measurePerformance(iterationMethod, array) {
    const startTime =  Date.now();
    iterationMethod(array);
    const endTime = Date.now();
    return endTime - startTime;
  }

  function forLoop(array) {
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
    }
  }

  function forOfLoop(array) {
    for (const item of array) {
      const item1=item;
    }
  }

  // Method 3: Using forEach method
  function forEachLoop(array) {
    array.forEach(item => {
      item*1;
    });
  }

  // Run test when button is clicked
  function runTest() {
    const arraySize = parseInt(document.getElementById("arraySize").value);
    const largeArray = new Array(arraySize).fill(0);
    
    const forLoopTime = measurePerformance(forLoop, largeArray);
    const forOfLoopTime = measurePerformance(forOfLoop, largeArray);
    const forEachLoopTime = measurePerformance(forEachLoop, largeArray);
    
    document.getElementById("results").innerHTML = `
      <p><strong>for loop:</strong> ${forLoopTime.toFixed(4)} ms</p>
      <p><strong>for...of loop:</strong> ${forOfLoopTime.toFixed(4)} ms</p>
      <p><strong>forEach method:</strong> ${forEachLoopTime.toFixed(4)} ms</p>
    `;
  }