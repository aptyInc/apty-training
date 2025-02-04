function parseJSON(jsonString) {
    try {
      let parsedData = JSON.parse(jsonString);
      return parsedData;
    } catch (error) {
      if (error instanceof SyntaxError) {
        return `Invalid JSON string: ${error.message}`;
      } else {
        return `Error: ${error.message}`;
      }
    }
  }
  
  function parseJSONFromInput() {
    const jsonString = document.getElementById("json").value; 
    const result = parseJSON(jsonString);
    document.getElementById("result").textContent = typeof result === "string" ? result : JSON.stringify(result, null, 2);
  }
  