function handleOnSubmit(event) {
    event.preventDefault();
    const output_div = document.querySelector(".output");
    const userInput = document.querySelector("#number_array_input").value;
  
    if (!userInput) {
      output_div.innerText = `Please provide an array of numbers to process.`;
      return;
    }
  
    try {
      const parsedArray = JSON.parse(userInput);
  
      if (!Array.isArray(parsedArray) || parsedArray.some(isNaN)) {
        output_div.innerText = `Invalid input. Please provide a valid array of numbers.`;
        return;
      }
  
      const result = parsedArray.filter((num) => num %2 === 0).map(num => num * 2).reduce((acc, curr) => acc + curr, 0);
  
      output_div.innerText = `Result: ${result}`;
    } catch (error) {
      output_div.innerText = `Invalid JSON array. Please check the format.`;
    }
  }
  