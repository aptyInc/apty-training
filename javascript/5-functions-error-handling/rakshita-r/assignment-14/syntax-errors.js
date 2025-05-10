function parseJSON(jsonString) {
  
    if (typeof jsonString !== "string") {
      return "Error: Input must be a string.";
    }
  
    try {
      
      const parsed = JSON.parse(jsonString);
      return parsed;
    } catch (error) {
      
      if (error instanceof SyntaxError) {
       
        return `Syntax Error: ${error.message}. Please check your JSON format. Examples of valid JSON:
        - {"key": "value"}
        - {"name": "Rakshita", "age": 25}`;
      }
     
      return `Error: An unexpected error occurred: ${error.message}`;
    }
  }
  
  
  function handleJSONInput(event) {
    event.preventDefault(); 
  
    const inputField = document.getElementById("jsonInput");
    const resultContainer = document.getElementById("result");
  
    const jsonString = inputField.value;
  
    const result = parseJSON(jsonString);

    if (typeof result === "object") {
      resultContainer.textContent = `Parsed JSON: ${JSON.stringify(result, null, 2)}`;
    } else {
      resultContainer.textContent = result; 
    }
  }
  

  document.getElementById("jsonForm").addEventListener("submit", handleJSONInput);
  