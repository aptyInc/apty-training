function handleOnSubmit(event) {
    event.preventDefault();
    const output_div = document.querySelector(".output");
    const userArrayInput = document.querySelector("#array_input").value;
  
    if (!userArrayInput) {
      output_div.innerText = `Please provide an array to perform the comparison.`;
      return;
    }
  
    try {
      const parsedArray = JSON.parse(userArrayInput);
  
      if (!Array.isArray(parsedArray)) {
        output_div.innerText = `Invalid array format. Please check the input.`;
        return;
      }
  
      const results = performComparison(parsedArray);
      output_div.innerHTML = `
        <p><strong>For Loop:</strong> ${results.forLoopTime} ms</p>
        <p><strong>For...of Loop:</strong> ${results.forOfTime} ms</p>
        <p><strong>forEach:</strong> ${results.forEachTime} ms</p>
      `;
    } catch (error) {
      output_div.innerText = `Invalid JSON array. Please check the input.`;
    }
  }
  
  // Function to compare performance of the different loop types
  function performComparison(array) {
    const simulateWork = (num) => num + 2; 
  
    let startTime = performance.now();
    for (let i = 0; i < array.length; i++) {
      simulateWork(array[i]);
    }
    let forLoopTime = performance.now() - startTime;
  
    startTime = performance.now();
    for (const value of array) {
      simulateWork(value);
    }
    let forOfTime = performance.now() - startTime;
  
    startTime = performance.now();
    array.forEach(simulateWork);
    let forEachTime = performance.now() - startTime;
  
    return {
      forLoopTime,
      forOfTime,
      forEachTime,
    };
  }
  