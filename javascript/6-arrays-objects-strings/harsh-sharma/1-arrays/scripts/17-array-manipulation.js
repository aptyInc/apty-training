function handleOnSubmit(event) {
    event.preventDefault();
    const output_div = document.querySelector(".output");
    const userInput1 = document.querySelector("#array_input_1").value;
    const userInput2 = document.querySelector("#array_input_2").value;
  
    if (!userInput1 || !userInput2) {
      output_div.innerText = `Please provide both arrays to perform the combination.`;
      return;
    }
  
    try {
      const parsedArray1 = JSON.parse(userInput1.trim());
      const parsedArray2 = JSON.parse(userInput2.trim());
  
      if (!Array.isArray(parsedArray1) || !Array.isArray(parsedArray2)) {
        output_div.innerText = `Invalid array format. Please enter valid JSON arrays.`;
        return;
      }
  
      const result = combineArraysWithoutDuplicates(parsedArray1, parsedArray2);
      output_div.innerText = JSON.stringify(result);
    } catch (error) {
      output_div.innerText = `Invalid JSON format. Ensure arrays are properly formatted.`;
    }
  }
  
  // Function to combine two arrays without duplicates
  function combineArraysWithoutDuplicates(arr1, arr2) {
    const combined = [...arr1, ...arr2]; 
    const uniqueCombined = [...new Set(combined)]; 
    return uniqueCombined;
  }
  